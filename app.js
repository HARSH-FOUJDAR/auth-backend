const express = require("express");
const cors = require("cors");
require("dotenv").config();
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


Database();
app.get("/", (req, res) => {
  res.json({ message: "Server is running & CORS is working" });
});

const authRouter = require("./routes/authRoutes");
app.use("/auth", authRouter);


module.exports = app;
