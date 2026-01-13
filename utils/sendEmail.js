const sgMail = require("@sendgrid/mail");
const resetPasswordEmailTemplate = require("./otpEmailTemplate");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (email, resetLink) => {
  try {
    const msg = {
      to: email,
      from: "codingwithharshfoujdar@gmail.com", // verified sender in SendGrid
      subject: "Reset Your Password",
      html: resetPasswordEmailTemplate(resetLink, "Harsh Foujdar"),
    };

    await sgMail.send(msg);
    console.log("✅ Reset link email sent successfully");
  } catch (error) {
    console.log("❌ Email sending error:", error.message);
  }
};

module.exports = sendEmail;
