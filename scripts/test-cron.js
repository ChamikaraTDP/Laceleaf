const { appendFile } = require("node:fs/promises");
const secrets = require('../client-data/secrets.json');

process.chdir(secrets.PWD);

async function updateProccessData(metadata) {
  await appendFile("./client-data/process.log", JSON.stringify(metadata));
  // await metadataFile.writeFile(JSON.stringify(metadata));
  // metadataFile.close();
}

updateProccessData({ time: Date.now() });