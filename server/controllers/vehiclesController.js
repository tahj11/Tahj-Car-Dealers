const Vehicle = require("../models/Vehicle");

exports.addCar = async (req, res) => {
  try {
    const newCar = await Vehicle.create(req.body);
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: "Could not add car." });
  }
};

exports.deleteCar = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCar = await Vehicle.findByIdAndDelete(id);

    if (!deletedCar) {
      return res.status(404);
    }

    res.json(deletedCar);
  } catch (error) {
    res.status(500).json({ error: "Could not delete the car" });
  }
};

exports.viewCar = async (req, res) => {
  const { id } = req.params;

  try {
    const car = await Vehicle.findById(id);

    if (!car) {
      return res.status(404).json({ error: "Car not found." });
    }

    res.json(car);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve the motor vehicle" });
  }
};

exports.viewAllCars = async (req, res) => {
  const { page = 1, limit = 15 } = req.query;

  try {
    //Convert page and limit to numbers
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    //Validate page and limit values
    if (
      isNaN(pageNumber) ||
      isNaN(limitNumber) ||
      pageNumber < 1 ||
      limitNumber < 1
    ) {
      return res
        .status(400)
        .json({ error: "Invalid page or limit parameter." });
    }

    //Calculate skip value for pagination
    const skip = (pageNumber - 1) * limitNumber;

    const cars = await Vehicle.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNumber);
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve the cars" });
  }
};

exports.updateCar = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedVehicle) {
      return res.status(404).json({ error: "Vehicle not found. " });
    }

    res.json(updatedVehicle);
  } catch (error) {
    res.status(500).json({ error: "Could not update the car." });
  }
};

exports.getModelsByMake = async (req, res) => {
  const { make } = req.params;

  try {
    const models = await Vehicle.distinct("model", {
      make: new RegExp(make, "i"),
    });
    res.json(models);
  } catch (error) {
    console.error("Error fetching models:", error);
    res.status(500).json({ error: "Could not retrieve models." });
  }
};

exports.getVehiclesByYear = async (req, res) => {
  const { year } = req.params;
  console.log("year", year);

  try {
    console.log("Entered try block");
    // Convert the year parameter to a number
    const yearNumber = parseInt(year, 10);

    // Check if the conversion was successful
    if (isNaN(yearNumber)) {
      return res.status(400).json({ error: "Invalid year parameter." });
    }

    const vehicles = await Vehicle.find({ year: yearNumber });
    res.json(vehicles);
  } catch (error) {
    console.log("Error fetching vehicles by year:", error);
    res
      .status(500)
      .json({ error: "Could not retrieve vehicles.", details: error.message });
  }
};

exports.getModelsByMakeAndYear = async (req, res) => {
  const { make, year } = req.params;

  try {
    const models = await Vehicle.distinct("model", {
      make: new RegExp(make, "i"),
      year,
    });
    res.json(models);
  } catch (error) {
    console.error("Error fetching models by make and year:", error);
    res
      .status(500)
      .json({ error: "Could not retrieve models.", details: error.message });
  }
};

exports.getAllMakes = async (req, res) => {
  console.log("Get All Makes function");
  try {
    console.log("Get all makes try block");
    const makes = await Vehicle.distinct("make");
    res.json(makes);
  } catch (error) {
    console.error("Error fetching makes:", error);
    res
      .status(500)
      .json({ error: "Could not retrieve makes.", details: error.message });
  }
};
