import Dr_location from "../models/dr_location.models.js";
import Driver from "../models/driver.models.js";


export const postLocation = async (req, res ) => {
    try {
      
        const newLocation = new Dr_location(req.body);

        await newLocation.save();
    
        res.status(201).json({ message: 'Location  created successfully', location : newLocation });
      } catch (error) {
        res.status(400).json({ error: 'Failed to create location', message: error.message });
      }

}

export const updateLocaton = async (req, res) => {
      try {


        const driver_id = req.params.driver_id;
        const { latitude, longitude } = req.body;
      
        // Update the post where userId matches
        Dr_location.updateOne({ driver_id: driver_id }, { latitude: latitude, longitude: longitude })
          .then(() => {
            res.send('Posts updated successfully');
          })
          .catch(error => {
            console.error('Error updating posts:', error);
            res.status(500).send('Internal Server Error');
          });





        // const driverId = req.params.driver_id;
        // const locationDataToUpdate = req.body;
    
        // // Find the driver by ID
        // const loc = await Dr_location.findOne({driver_id : driverId});
    
        // if (!loc) {
        //   return res.status(404).json({ error: 'driver not found' });
        // }
    
        // // Update driver properties with new data
        // Object.assign(loc, locationDataToUpdate);
    
        // // Save the updated driver to the database
        // await loc.save();
    
        // res.json({ message: 'User updated successfully', loc });
      } catch (error) {
        res.status(400).json({ error: 'Failed to update user', message: error.message });
      }
}


export const getAllLocation = async (req, res) => {
  try {
    const driversLocation = await Dr_location.find({});
    res.json(driversLocation);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

