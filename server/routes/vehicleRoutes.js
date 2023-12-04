const express = require("express");
const router = express.Router();
const vehiclesController = require("../controllers/vehiclesController");
const authorize = require("../middlewares/authorize");
const Roles = require("../roles");

router.post("/add", authorize(Roles.ADMIN), vehiclesController.addCar);
router.delete("/:id", authorize(Roles.ADMIN), vehiclesController.deleteCar);
router.get("/:id", vehiclesController.viewCar);
router.get("/", vehiclesController.viewAllCars);
router.put("/:id", authorize(Roles.ADMIN), vehiclesController.updateCar);

module.exports = router;
