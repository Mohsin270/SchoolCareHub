// backend/routes/authRoutes.js
import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// Signup Route
router.post('/', async (req, res) => {
  const { name, email, password} = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Save password as a plain string (no hashing)
    user = new User({
      name,
      email,
      password,
    });

    await user.save();

    res.status(201).json({ msg: 'User created successfully', user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route for user login with role check
router.post('/login', async (req, res) => {
  const { email, password, userRole } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'User not registered' });
    }

    // Simple string comparison (since password is not hashed)
    if (user.password !== password) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check if the userRole matches
    if (user.userRole !== userRole) {
      return res.status(403).json({ msg: 'User does not have the required role' });
    }

    res.json({ msg: 'Login successful', user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;
