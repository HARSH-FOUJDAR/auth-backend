const mongoose = require("mongoose");

module.exports = async function Database() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Failed");
    console.error(error.message);
    process.exit(1);
  }
};
