import express, { raw } from "express";
import { postLocation } from "../controllers/dr_locationController.js";
import { updateLocaton } from "../controllers/dr_locationController.js";
import { getAllLocation } from "../controllers/dr_locationController.js";
import { deleteLocation } from "../controllers/dr_locationController.js";


const router = express.Router();


// Get all the driver location 

router.get('/all', getAllLocation)

// Get a driver by Id

//router.get("/:id", getLocation)

// Post drivers location 

router.post("/", postLocation)


// update driver location 

router.put("/", updateLocaton)


// delete driver location

router.delete("/:id", deleteLocation)


export default router
