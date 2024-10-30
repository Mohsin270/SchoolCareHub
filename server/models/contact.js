import { Schema, model } from 'mongoose';

const contactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now }
});

export default model('Contact', contactSchema);
