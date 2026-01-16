const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const Database = require("./config/Databse");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin:"https://celebrated-biscuit-bc6d52.netlify.app",
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
