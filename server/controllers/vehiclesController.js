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
  try {
    const cars = await Vehicle.find();
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
