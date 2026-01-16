const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const Database = require("./config/Databse");

const app = express();
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://frontend-auth-nhku.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// Preflight fix (IMPORTANT)
app.options("*", cors());


app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Cors is working harsh" });
});

const authRouter = require("./routes/authRoutes");
app.use("/auth", authRouter);
Database();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servere is Running on port ${port}`);
});
