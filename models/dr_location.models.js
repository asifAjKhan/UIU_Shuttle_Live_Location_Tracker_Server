import mongoose from "mongoose";

const dr_location = mongoose.Schema({

    driver_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "driverSchema"
    },


    latitude : {
        type : String,
        require : true,
    },

    longitude : {
        type : String,
        require : true
    },

    

   

    
})

const Dr_location = mongoose.model("Dr_location", dr_location)

export default Dr_location