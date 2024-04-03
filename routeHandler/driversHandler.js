import  express from "express";

import { getAllDrivers } from "../controllers/driverController.js";

import { getSingleDriver } from "../controllers/driverController.js";


const driverRouther = express.Router();


//get all drivers
driverRouther.get("/", getAllDrivers)

//get single driver

driverRouther.get("/:driver_id", getSingleDriver)

export default driverRouther;