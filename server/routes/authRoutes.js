//routes/authRoutes.js
const express = require("express");
const authController = require("../controllers/authController");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

//Register endpoint
// router.post("/register", authController.registerUser);

//Login endpoint
router.post("/login", authController.loginUser);

// Combined registration and profile picture upload endpoint
router.post(
  "/register",
  upload.single("profilePicture"),
  authController.registerAndUploadProfilePicture
);

module.exports = router;
