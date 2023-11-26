//userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const upload = require("../middlewares/uploadMiddleware");
const authorize = require("../middlewares/authorize");
const Roles = require("../roles");

const router = express.Router();

router.post(
  "/:userId/upload-profile-picture",
  upload.single("profilePicture"),
  userController.uploadProfilePicture
);

router.get("/", authorize(Roles.ADMIN), userController.getAllUsers);

router.delete("/:id", authorize(Roles.ADMIN), userController.deleteUserById);

router.get("/:id", authorize(Roles.ADMIN), userController.getUserById);

module.exports = router;
