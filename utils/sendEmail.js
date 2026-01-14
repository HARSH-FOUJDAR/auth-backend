const nodemailer = require("nodemailer");
const resetPasswordEmailTemplate = require("./otpEmailTemplate");

const sendEmail = async (email, resetLink) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL, // verified sender email
        pass: process.env.EMAIL_PASS, // ✅ Brevo SMTP KEY
      },
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

module.exports = sendEmail;
