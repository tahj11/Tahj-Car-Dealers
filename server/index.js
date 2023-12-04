const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/authRoutes");
const userRoute = require("./routes/userRoutes");
const protectedRoute = require("./routes/protectedRoutes");
const vehiclesRoute = require("./routes/vehicleRoutes");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/vehicles", vehiclesRoute);
app.use("/api/protected", protectedRoute);

app.listen(process.env.PORT || 5005, () => {
  console.log("Backend server is running");
});
