import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
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
}, {timestamps: true})


 const Student = mongoose.model("Student",studentSchema)

 export default Student