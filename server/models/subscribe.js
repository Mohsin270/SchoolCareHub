// models/Subscriber.js
import { Schema, model } from 'mongoose';

const subscriberSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    subscribedAt: {
        type: Date,
        default: Date.now
    }
});

export default model('Subscriber', subscriberSchema);
