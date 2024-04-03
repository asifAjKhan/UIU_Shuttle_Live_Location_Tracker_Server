import Driver from "../models/driver.models.js"


export const getAllDrivers = async (req, res) => {

    try{

        const driver = await Driver.find();
        res.json(driver)

    }catch(error){
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
  
    
}


export const getSingleDriver = async (req, res) => {

    try{

        const {driver_id} = req.param;

        const driver = await Driver.findOne({driver_id : driver_id});
        res.json(driver)

    }catch(error){
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
  
    
}