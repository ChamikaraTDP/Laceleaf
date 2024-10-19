"use server";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: process.env.EMAIL_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
export async function sendUserMessages() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'info@sujathasanthurium.com', // sender address
    to: "pramudithachamikara@gmail.com", // list of receivers
    subject: "Hello 2 from sujathasanthurium", // Subject line
    text: "Hello world from sujatha's anthurium", // plain text body
    html: "<h2>Hello world from sujatha's anthurium</h2>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
