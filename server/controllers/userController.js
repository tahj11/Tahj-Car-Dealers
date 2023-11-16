//userController.js
const User = require("../models/User");
const upload = require("../middlewares/uploadMiddleware");

//Controller function to update a user's profile picture
exports.uploadProfilePicture = async (req, res) => {
  try {
    const userId = req.params.userId;

    const profilePicture = req.file.filename;

    //Update the user's profile picture field using async/await
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePicture },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Profile picture updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error uploading profile picture: ", err: err.message });
  }
};
