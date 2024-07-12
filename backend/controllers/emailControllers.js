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
    text: "Information From Submission",
    html: `<h2>Dear ${fullname},</h2><h4>Thank you for reaching out to us.</h4><p>We have received your request and our representative will be in touch with you shortly to assist you further. Your inquiry is important to us, and we are committed to providing you with the best possible service.</p><p>If you have any additional information or questions in the meantime, please feel free to reply to this email.</p><p>Thank you for your patience and understanding.</p><p>Best regards,</p><p>Debnath Mahapatra</p><p>Intern</p><p>SentientGeeks</p><p>WhatsApp: 7319358180</p>`
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
