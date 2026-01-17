const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const Database = require("./config/Databse");

const app = express();


app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://frontend-auth-nhku.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));




app.use(async (req, res, next) => {
  try {
    if (!isConnected) {
      await Database();
      isConnected = true;
      console.log("MongoDB Connected");
    }
    next();
  } catch (error) {
    console.error(" MongoDB Connection Error:", error.message);
    res.status(500).json({ message: "Database connection failed" });
  }
});
Database();
app.get("/", (req, res) => {
  res.json({ message: "Server is running & CORS is working" });
});

const authRouter = require("./routes/authRoutes");
app.use("/auth", authRouter);


module.exports = app;
