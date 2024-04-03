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
        Dr_location.findOneAndUpdate({ driver_id: driver_id }, { latitude: latitude, longitude: longitude })
          .then((data) => {
            res.json(data);
          })
          .catch(error => {
            console.error('Error updating posts:', error);
            res.status(500).send('Internal Server Error');
          });


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


export const deleteLocation = async (req, res) => {
  try {
    const driversLocation = await Dr_location.delete({});
    res.json(driversLocation);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}




