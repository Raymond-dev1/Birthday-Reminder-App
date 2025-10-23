const nodemailer = require("nodemailer");
require("dotenv").config();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   port:process.env.HOST,
//   auth: {
//     user: "iziogbaraymond72@gmail.com",
//     pass:process.env.GOOGLE_PASSWORD
//   },
// });

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GOOGLE_PASSWORD,
  },
   connectionTimeout: 15000,
  tls: {
    rejectUnauthorized: false
  }
});

transporter
  .verify()
  .then(() => {
    console.log("Email transporter is ready to send messages");
  })
  .catch((error) => {
    console.log("error in configuring transporter", error);
  });

// //TESTING
// const Ttransporter = nodemailer.createTransport({
//   host: process.env.HOST || "smtp.ethereal.email",
//   port: parseInt(process.env.EMAIL_PORT) || 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER || "yazmin.nader42@ethereal.email",
//     pass: process.env.PASSWORD || "NYQjNbPHVCRnM8cWB1",
//   },
// });

// Ttransporter.verify((error, success) => {
//   if (error) {
//     console.log("error in cofiguring transporter", error);
//   } else {
//     console.log("Email transporter is ready to send messages");
//   }
// });

module.exports = {
  transporter,
//   Ttransporter,
};
