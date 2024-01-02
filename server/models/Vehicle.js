const mongoose = require("mongoose");

const vehicleTypes = [
  "sedan",
  "motorcycle",
  "SUV",
  "pickup",
  "hatchback",
  "minivan",
  "coupe",
];

const location = [
  "Manchester",
  "Kingston",
  "St. Catherine",
  "Clarendon",
  "St. Elizabeth",
  "St. James",
  "St. Ann",
  "Hanover",
  "Westmoreland",
  "Trelawny",
  "Portland",
  "St. Mary",
  "St. Thomas",
  "St. Andrew",
];

const VehicleSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    mileage: {
      type: String,
      required: true,
    },
    picture: { type: String, required: true },
    type: {
      type: String,
      enum: vehicleTypes,
      required: true,
    },
    location: {
      type: String,
      enum: location,
      required: true,
    },
    color: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vehicle", VehicleSchema);
