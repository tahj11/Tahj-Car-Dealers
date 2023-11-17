require("dotenv").config();
const jwt = require("jsonwebtoken");

const authorize = (requiredRoles) => {
  return (req, res, next) => {
    const token = req.header("Authorization").replace("Bearer ", "").trim();

    console.log(typeof token);
    console.log("Received token: ", token);
    console.log("JWT SECRET: ", process.env.JWT_SECRET);

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: User not authenticated..." });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const userRole = decoded.role;
      console.log("Decoded with verification:", decoded);

      if (
        !userRole ||
        (!Array.isArray(requiredRoles) && userRole !== requiredRoles) ||
        (Array.isArray(requiredRoles) && !requiredRoles.includes(userRole))
      ) {
        return res
          .status(403)
          .json({ message: "Forbidden: Insufficient permissions" });
      }

      req.user = decoded;
      next();
    } catch (err) {
      res
        .status(401)
        .json({ message: "Unauthorized: Invalid Token", err: err.message });
    }
  };
};

module.exports = authorize;
