const mongoose = require("mongoose");

const Database = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Databse is connected on port");
  } catch (err) {
    console.log("Databse not connected");
  }
};

module.exports = Database;
