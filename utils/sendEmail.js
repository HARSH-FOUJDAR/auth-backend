const nodemailer = require("nodemailer");
const resetPasswordEmailTemplate = require("./otpEmailTemplate");

const sendEmail = async (email, resetLink) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Harsh Foujdar" <${process.env.EMAIL}>`,
      to: email,
      subject: "Reset Your Password",
      html: resetPasswordEmailTemplate(resetLink, "Harsh Foujdar"),
    });
    console.log(" Email sent successfully");
  } catch (error) {
    console.error("Email sending error:", error.message);
  }
};

module.exports = sendEmail;
