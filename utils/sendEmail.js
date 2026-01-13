const nodemailer = require("nodemailer");
const resetPasswordEmailTemplate = require("./otpEmailTemplate");

const sendEmail = async (email, resetLink) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "apikey", // fixed
        pass: process.env.SENDGRID_API_KEY, // Render ENV
      },
    });

    await transporter.sendMail({
      from: `"Harsh Foujdar" <codingwithharshfoujdar@gmail.com>`,
      to: email,
      subject: "Reset Your Password",
      html: resetPasswordEmailTemplate(resetLink, "Harsh Foujdar"),
    });

    console.log("✅ Reset link email sent successfully");
  } catch (error) {
    console.log("❌ Email sending error:", error.message);
  }
};

module.exports = sendEmail;
