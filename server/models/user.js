// backend/models/user.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },  // Ideally, this would be hashed in production
}, { timestamps: true });

export default mongoose.model('User', userSchema);
