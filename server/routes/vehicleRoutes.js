const express = require("express");
const router = express.Router();
const vehiclesController = require("../controllers/vehiclesController");
const authorize = require("../middlewares/authorize");
const Roles = require("../roles");

router.post("/add", authorize(Roles.ADMIN), vehiclesController.addCar);
router.delete("/:id", authorize(Roles.ADMIN), vehiclesController.deleteCar);
router.get("/:id", vehiclesController.viewCar);
router.get("/", vehiclesController.viewAllCars);
router.get("/makes", vehiclesController.getAllMakes);
router.put("/:id", authorize(Roles.ADMIN), vehiclesController.updateCar);
router.get("/models/:make", vehiclesController.getModelsByMake);
router.get("/by-year/:year", vehiclesController.getVehiclesByYear);
router.get("/models/:make/:year", vehiclesController.getModelsByMakeAndYear);

module.exports = router;
