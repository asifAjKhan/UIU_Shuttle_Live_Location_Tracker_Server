import express from 'express'
//import multer from 'multer';

import mongoose from 'mongoose';

import driverLocationHandler from './routeHandler/driverLocationHandler.js'
import authRouther from './routeHandler/authHandler.js';
import driverRouther from './routeHandler/driversHandler.js';

import cors from 'cors'



const app = express();
app.use(express.json())
//app.use(cors())



//mongodb connection

mongoose.connect("mongodb://localhost/shuttle")
.then(() => console.log("Database connected successfully"))
.catch(err => console.log(err))



app.use("/d_location", driverLocationHandler)
app.use("/auth",authRouther)
app.use("/driver", driverRouther)



app.listen(3000, () => {
    console.log("App is listening at port 3000")
})