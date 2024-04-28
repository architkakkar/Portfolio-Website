const nodemailer = require("nodemailer");
require("dotenv").config();

// Create a reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Function to send email
const sendEmail = async (to, subject, text) => {
  try {
    let info = await transporter.sendMail({
      from: `"Archit Kakkar" <${process.env.SMTP_USER}>`, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
