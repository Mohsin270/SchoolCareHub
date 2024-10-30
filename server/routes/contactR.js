import { Router } from 'express';
const router = Router();
import Contact from '../models/contact.js';

// POST route to handle contact form submission
router.post('/', async (req, res) => {
    const { name, email, subject, description } = req.body;

    try {
        const newContact = new Contact({ name, email, subject, description });
        await newContact.save();
        res.status(201).json({ message: 'Your message has been sent successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send message. Please try again later.', error: error.message });
    }
});

export default router;
