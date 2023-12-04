const mongoose = require("mongoose");

const vehicleTypes = [
  "sedan",
  "motorcycle",
  "suv",
  "pickup",
  "hatchback",
  "minivan",
  "coupe",
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vehicle", VehicleSchema);
