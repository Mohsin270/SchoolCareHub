// models/School.js
import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['School', 'ChildCare'], // Specify valid categories
  },
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure unique email
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  licenceNo: {
    type: String,
    required: true,
  },
  schoolType: {
    type: String,
    required: function () { return this.category === 'School'; }, // Conditional requirement
  },
  syllabusType: {
    type: String,
    required: function () { return this.category === 'School'; }, // Conditional requirement
  },
  fee: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 1,
    min: 1,
    max: 5,
  },
  religion: {
    type: String,
    required: true,
  },
  careType: {
    type: String,
    required: function () { return this.category === 'ChildCare'; }, // Conditional requirement
  },
  openingHours: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

const School = mongoose.model('School', schoolSchema);
export default School;
