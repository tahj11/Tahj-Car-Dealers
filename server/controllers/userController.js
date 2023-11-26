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

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log("Error fetching users: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
