// backend/routes/authRoutes.js
import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const router = express.Router();

// Signup Route
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create a new user
        const newUser = new User({ name, email, password });
        await newUser.save();

        // Generate JWT token
        const payload = { user: { id: newUser.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '10h' });

        res.status(201).json({ token });
    } catch (err) {
        console.error("Error during signup:", err.message);
        res.status(500).json({ msg: 'Server error' });
    }
});

export default router;
