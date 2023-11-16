//routes/authRoutes.js
const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

//Register endpoint
router.post("/register", authController.registerUser);

//Login endpoint
router.post("/login", authController.loginUser);

module.exports = router;
