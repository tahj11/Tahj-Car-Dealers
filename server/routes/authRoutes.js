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
  (req, res, next) => {
    console.log("Request body:", req.body);
    console.log("Request file:", req.file);

    authController.registerAndUploadProfilePicture(req, res).catch(next);
  },
  (err, req, res, next) => {
    console.error("Error in /register endpoint:", err);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
);

module.exports = router;
