const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization");

    console.log("Received token:", token);

    if (!token || typeof token !== "string") {
      throw new Error("Invalid token format");
    }

    // Extract the actual token from the "Bearer " prefix
    const tokenValue = token.replace("Bearer ", "");

    const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET);
    req.user = decoded;
    next(); //Pass control to the next middleware or route handler
  } catch (err) {
    console.error("Error verifying token:", err.message);
    res
      .status(401)
      .json({ message: "Error verifying token", err: err.message });
  }
};

module.exports = verifyToken;
