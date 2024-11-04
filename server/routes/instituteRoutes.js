import { Router } from 'express';
import Institute from '../models/institutes.js';
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

    // Create a new institute object
    const newInstitute = new Institute({
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

    // Save the institute to the database
    await newInstitute.save();
    res.status(201).json({ msg: 'Institute registered successfully!' });
  } catch (error) {
    console.error('Error registering institute:', error);
    if (error.code === 11000) { // Handle duplicate key error for unique fields
      res.status(409).json({ msg: 'Institute with this email or licence number already exists.' });
    } else {
      res.status(500).json({ msg: 'Error registering institute', error });
    }
  }
});

// GET route to search for institutes by location and category
router.get('/search', async (req, res) => {
  const { location, category } = req.query;
  try {
    const results = await Institute.find({
      location: { $regex: location, $options: 'i' },
      category: category,
    });
    res.json(results);
  } catch (err) {
    console.error("Error searching records:", err);
    res.status(500).json({ error: 'An error occurred during search.' });
  }
});

export default router;
