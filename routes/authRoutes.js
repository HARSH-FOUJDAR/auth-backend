const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

//  Forgot password → reset link send
router.post("/forgotpassword", authController.forgotPassword);

//  Reset password using token
router.post("/reset-password/:token", authController.resetPassword);

// Signup
router.post("/signup", authController.signupPost);
//Login
router.post("/login", authController.PostLogin);
//Logout
router.post("/logout", authController.logoutPost);
module.exports = router;
