const nodemailer = require("nodemailer");
const resetPasswordEmailTemplate = require("./otpEmailTemplate");

const sendEmail = async (email, resetLink) => {
  try {
    // 1️⃣ Transporter (Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,      // your gmail id
        pass: process.env.EMAIL_PASS // Gmail App Password
      },
    });

    // 2️⃣ Send mail
    await transporter.sendMail({
      from: `"Harsh Foujdar" <${process.env.EMAIL}>`,
      to: email,
      subject: "Reset Your Password",
      html: resetPasswordEmailTemplate(resetLink, "Harsh Foujdar"),
    });

    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ Email sending error:", error.message);
  }
};

module.exports = sendEmail;
