import express from 'express';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Register User
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ msg: 'User created successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
// Login User
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate input fields
  if (!email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ msg: 'User not registered' });
      }

      // Verify the user's password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ msg: 'Invalid credentials' });
      }

      // Check if the user role matches the role passed in the request
      // if (user.role !== userRole) {
      //     return res.status(403).json({ msg: 'Unauthorized access for the selected role' });
      // }

      // Generate token and include user role and name for role-based access control
      const token = jwt.sign(
          { id: user._id, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
      );

      // Respond with token and basic user information
      res.json({
          token,
          user: { id: user._id, name: user.name, email: user.email, role: user.role },
      });

  } catch (err) {
      console.error('Server Error:', err.message);
      res.status(500).send('Server error');
  }
});

// Get User Information
router.get('/', async (req, res) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password'); // Exclude password from response
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;
