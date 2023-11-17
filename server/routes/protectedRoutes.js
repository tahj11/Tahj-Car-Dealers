// routes/protectedRoutes.js
const express = require("express");
const authorize = require("../middlewares/authorize");
const Roles = require("../roles");

const router = express.Router();

router.get("/admin-route", authorize(Roles.ADMIN), (req, res) => {
  res.json({ message: "Admin-only route" });
});

router.get("/user-route", authorize(Roles.USER), (req, res) => {
  res.json({ message: "User-only route" });
});

router.get(
  "/user-and-admin-route",
  authorize([Roles.USER, Roles.ADMIN]),
  (req, res) => {
    res.json({ message: "User and Admin route" });
  }
);

module.exports = router;
