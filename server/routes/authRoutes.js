// backend/routes/authRoutes.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Router } from 'express';
import User from '../models/user.js';
const router = Router();

// Signup Route
router.post('/signup', async (req, res) => {
    console.log("Received signup data:", req.body);  // Log request body

    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create a new user without password encryption
        const newUser = new User({ name, email, password });
        await newUser.save();

        // JWT payload
        const payload = { user: { id: newUser.id } };

        // Sign the JWT token
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '10h' });
        res.json({ token });

    } catch (err) {
        console.error("Error during signup:", err.message);
        res.status(500).json({ msg: 'Server error' });
    }
});


export default router;