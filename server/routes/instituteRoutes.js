// routes/register.js
import { Router } from 'express';
import School from '../models/register.js';
const router = Router();

// POST route for school/daycare registration
router.post('/', async (req, res) => {
  try {
    const {
      category,
      Name,
      email,
      phone,
      location,
      licenceNo,
      schoolType,
      syllabusType,
      fee,
      rating,
      religion,
      careType,
      openingHours,
    } = req.body;

    // Create a new school object
    const newSchool = new School({
      category,
      Name,
      email,
      phone,
      location,
      licenceNo,
      schoolType,
      syllabusType,
      fee,
      rating,
      religion,
      careType,
      openingHours,
    });

    // Save the school to the database
    await newSchool.save();

    // Respond with a success message
    res.status(200).json({ msg: 'School registered successfully!' });
  } catch (error) {
    console.error('Error registering school:', error);
    res.status(500).json({ msg: 'Error registering school', error });
  }
});
// GET route for searching schools or daycare by location and category
router.get('/search', async (req, res) => {
  try {
    const { location, category } = req.query; // Retrieve location and category from query params
    console.log({ location, category });

    // Find schools or daycare centers based on location and category
    const results = await School.find({
      location: { $regex: location, $options: 'i' }, // Case-insensitive location matching
      category: category
    });

    // Check if any results were found
    if (results.length > 0) {
      res.status(200).json(results); // Return the found results
    } else {
      res.status(404).json({ msg: 'No schools or daycares found matching your criteria' });
    }
  } catch (error) {
    console.error('Error fetching schools/daycares:', error);
    res.status(500).json({ msg: 'Server error', error });
  }
});
export default router;
