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

    await transporter.verify();
    console.log("✅ Gmail transporter ready");

    await transporter.sendMail({
      from: `"Harsh Foujdar" <${process.env.EMAIL}>`,
      to: email,
      subject: "Reset Your Password",
      html: resetPasswordEmailTemplate(resetLink, "Harsh Foujdar"),
    });

    console.log("✅ Reset email sent");
  } catch (error) {
    console.error("❌ Email sending error:", error);
  }
};

module.exports = sendEmail;
