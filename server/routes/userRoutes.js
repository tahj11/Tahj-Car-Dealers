//userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

router.post(
  "/:userId/upload-profile-picture",
  upload.single("profilePicture"),
  userController.uploadProfilePicture
);

module.exports = router;
