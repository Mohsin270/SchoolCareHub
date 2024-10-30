// routes/subscriber.js
import { Router } from 'express';
const router = Router();
import Subscriber from '../models/subscribe.js';

// POST route for subscription
router.post('/', async (req, res) => {
    const { email } = req.body;

    try {
        // Check if email already exists
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            return res.status(400).json({ message: 'You are already subscribed!' });
        }

        // Create and save new subscriber
        const subscriber = new Subscriber({ email });
        await subscriber.save();
        res.status(201).json({ message: 'Successfully subscribed!' });
    } catch (error) {
        console.error('Error during subscription:', error); // Log for debugging
        res.status(500).json({ message: 'Subscription failed', error: error.message });
    }
});

export default router;
