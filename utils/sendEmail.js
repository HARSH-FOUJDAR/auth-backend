const nodemailer = require("nodemailer");

const sendEmail = async (email, resetLink) => {
  try {
    console.log("📩 Email function called");
    console.log("➡️ To:", email);
    console.log("➡️ Link:", resetLink);
    console.log("➡️ From ENV:", process.env.EMAIL ? "OK" : "MISSING");
    console.log("➡️ Pass ENV:", process.env.EMAIL_PASS ? "OK" : "MISSING");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("✅ Gmail transporter VERIFIED");

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "TEST RESET EMAIL",
      text: `Reset link: ${resetLink}`,
    });

    console.log("✅ EMAIL SENT SUCCESSFULLY");
  } catch (error) {
    console.log("❌ EMAIL ERROR MESSAGE:", error.message);
    console.log("❌ EMAIL ERROR STACK:", error.stack);
  }
};

module.exports = sendEmail;