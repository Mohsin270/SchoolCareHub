import { Router } from 'express';  // Import Router first
import Register from '../../back/models/register.js';

const router = Router();

// POST route for registering a school
router.post('/', async (req, res) => {
  const {
    schoolName, email, phone, address, city, state, zip, category, capacity, openingHours
  } = req.body;

  // Basic validation
  if (!schoolName || !email || !phone || !address || !city || !state || !zip || !capacity || !openingHours) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  try {
    // Check if a school with the same email already exists
    const existingSchool = await Register.findOne({ email });
    if (existingSchool) {
      return res.status(400).json({ msg: 'Registration with this email already exists' }); // Corrected spelling
    }

    // Create new school object
    const newSchool = new Register({
      schoolName,
      email,
      phone,
      address,
      city,
      state,
      zip,
      category,
      capacity,
      openingHours,
    });

    // Save the school to the database
    await newSchool.save();

    // Send success response
    res.status(201).json({ 
      msg: 'School registered successfully', 
      school: { schoolName, email, phone, address, city, state, zip, category, capacity, openingHours } // Return only relevant fields
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

// GET route for fetching schools
router.get('/', async (req, res) => {
  const { address, category } = req.query;

  try {
    const query = {};
    if (address) query.address = new RegExp(address, 'i'); // Case insensitive search
    if (category) query.category = category;

    const institutes = await Register.find(query);
    res.json(institutes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
