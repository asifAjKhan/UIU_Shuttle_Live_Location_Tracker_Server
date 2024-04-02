import  express from "express";

import { getAllDrivers } from "../controllers/driverController.js";


const driverRouther = express.Router();


//get all drivers
driverRouther.get("/", getAllDrivers)

//driverRouther.post("/login", login)


export default driverRouther;