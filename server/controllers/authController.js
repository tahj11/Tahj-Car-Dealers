//authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Roles = require("../roles");
require("dotenv").config();

exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password, role, profilePicture } =
    req.body;

  try {
    //Check if the username is already taken
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    //Hash the password
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    //Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPassword,
      role: role || Roles.USER, //Set dafault role to USER if not provided
      profilePicture,
    });

    //Save the user to the database
    const savedUser = await newUser.save();

    res.json(savedUser);
  } catch (err) {
    console.log("Error registering user: ", err);
  }
};

// Controller function to register a new user and upload a profile picture
exports.registerAndUploadProfilePicture = async (req, res) => {
  try {
    // You can retrieve registration data from req.body, for example:
    const { firstName, lastName, email, password, role } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    //Hash the password
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPassword, // Make sure to hash the password before saving it in a real-world scenario
      role: role || Roles.USER, // Set default role to USER if no role is provided
    });

    //Save the user to the database
    const savedUser = await newUser.save();
    // Assuming the new user is stored in newUser
    const userId = newUser._id;

    // Profile picture upload logic
    const profilePicture = req.file.filename;

    // Update the user's profile picture field
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePicture },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Registration and profile picture upload successful",
      user: updatedUser,
    });
  } catch (error) {
    // console.error(error);
    res.status(500).json({
      message: "Error during registration or profile picture upload",
      error: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    console.log("User role:", user.role);

    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const { ...others } = user._doc;

    console.log("Generated token:", accessToken);

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    console.log("Error upon user login: ", err);
  }
};
