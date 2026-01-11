const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const Database = require("./config/Databse");

const app = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://spectacular-stardust-aeb43a.netlify.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"), false);
      }
    },
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Cors is working" });
});

const authRouter = require("./routes/authRoutes");
app.use("/auth", authRouter);
Database();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servere is Running on port ${port}`);
});
