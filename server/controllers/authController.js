//authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Roles = require("../roles");

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

    const accessToken = jwt.sign(
      { userId: user, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const { ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    console.log("Error upon user login: ", err);
  }
};
