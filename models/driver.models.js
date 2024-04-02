import mongoose from 'mongoose'


const driverSchema = mongoose.Schema({

    name : {
        type : String,
        require : true
    },

    email : {
        type : String,
        require : true
    },

    password : {
        type : String,
        require : true
    }

}, {timestamps : true})

 const Driver = mongoose.model("Driver", driverSchema)

 export default Driver