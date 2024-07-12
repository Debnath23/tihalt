const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { fullname, email, number, subject, message } = req.body;
  console.log(fullname, email, number, subject, message);

  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Confirmation: We Have Received Your Request",
    text: `Dear ${fullname},`,
    html: "<h1>Dear ,</h1><br /><h2>Thank you for reaching out to us.</h2><br /><p>We have received your request and our representative will be in touch with you shortly to assist you further. Your inquiry is important to us, and we are committed to providing you with the best possible service.</p><br /><p>If you have any additional information or questions in the meantime, please feel free to reply to this email.</p><br /><p>Thank you for your patience and understanding.</p><br /><p>Best regards,</p><br /><p>Debnath Mahapatra</p><br /><p>Intern</p><br /><p>SentientGeeks</p><br /><p>WhatsApp: 7319358180</p>"
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
    }
  });
});

module.exports = { sendEmail };
