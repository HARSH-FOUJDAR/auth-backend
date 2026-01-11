const nodemailer = require("nodemailer");
const resetPasswordEmailTemplate = require("./otpEmailTemplate");

const sendResetEmail = async (email, resetLink) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 10000, 
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    await transporter.sendMail({
      from: `"Harsh Foujdar" <${process.env.EMAIL}>`,
      to: email,
      subject: "Reset Your Password pls open the link Dextop",
      html: resetPasswordEmailTemplate(resetLink, "Harsh Foujdar"),
    });

    console.log("Reset link email sent successfully");
  } catch (error) {
    console.error("Email sending error:", error);
  }
};

module.exports = sendResetEmail;
