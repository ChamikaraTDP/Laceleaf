const secrets = require('../client-data/secrets.json');
const { open, appendFile } = require("node:fs/promises");
const nodemailer = require("nodemailer");

process.chdir(secrets.PWD);

async function readMsg() {
  const metadataFile = await open("./client-data/process-meta.json");
  const fileMeta = await metadataFile.readFile();
  metadataFile.close();

  const fileMatadata = JSON.parse(fileMeta);

  let eof = false;
  let bufOffset = 0;
  let fsOffset = fileMatadata.fsOffset;

  // console.log('fsOffset', fsOffset);

  const buf = Buffer.alloc(1024 * 5);

  const msgFile = await open("./client-data/user-messages.json");

  while (!eof) {
    await msgFile
      .read({
        buffer: buf,
        offset: bufOffset,
        length: 100,
        position: fsOffset,
      })
      .then(({ bytesRead }) => {
        if (bytesRead <= 0) {
          eof = true;

          // console.log("read %d bytes", bufOffset);
        } else {
          bufOffset += bytesRead;
          fsOffset += bytesRead;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  msgFile.close();

  if (bufOffset <= 0) {
    await updateLog(`fsOffset: ${fsOffset}, mailCount: ${fileMatadata.mailCount}, No Updates`);
    return;
  }

  const fileData = buf.toString('utf8', 0, bufOffset);

  // console.log(fileData);
  // console.log('fsOffset', fsOffset, 'bufOffset', bufOffset);

  const metadataUpdated = { ...fileMatadata, fsOffset, mailCount: fileMatadata.mailCount + 1 };

  await sendEmail(fileData, metadataUpdated);

  await updateProccessData(metadataUpdated);

  await updateLog(`fsOffset: ${fsOffset}, mailCount: ${fileMatadata.mailCount + 1}, Mail Sent`);
}

async function updateProccessData(metadata) {
  const metadataFile = await open("./client-data/process-meta.json", "w");
  await metadataFile.writeFile(JSON.stringify(metadata));
  metadataFile.close();
}

async function updateLog(record) {
  const now = (new Date()).toISOString();

  appendFile("./client-data/process.log", `${now}, ${record} \n`);
}

async function updateErrorLog(record) {
  const now = (new Date()).toISOString();

  appendFile("./client-data/error.log", `${now}, ${record} \n`);
}

async function sendEmail(messages, metadata) {
  const transporter = nodemailer.createTransport({
    host: secrets.EMAIL_SERVER,
    port: secrets.EMAIL_PORT,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: secrets.EMAIL_USERNAME,
      pass: secrets.EMAIL_PASSWORD,
    },
  });

  // const body = messages;
  const msg = {
    from: "info@sujathasanthurium.com", // sender address
    to: "sujathasanthurium@gmail.com", // list of receivers
    subject: "Client Message #" + metadata.mailCount, // Subject line
    text: 'You received new messages from clients,\n' + messages, // plain text body
    html: "<h2>You received new messages from clients</h2><br/>" + messages.replaceAll('\n', '<br/>'), // html body
  };

  // console.log(msg);

  const info = await transporter.sendMail(msg);
  // console.log("Message sent: %s", info.messageId);
}

readMsg()
.catch((err) => {
  updateErrorLog(err.msg);
});
