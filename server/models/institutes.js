import mongoose from 'mongoose';

const instituteSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['School', 'ChildCare'],
  },
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Simple email regex for validation
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: /^[0-9]{10,12}$/, // Basic phone validation for 10-12 digits
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  licenceNo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  schoolType: {
    type: String,
    required: function () { return this.category === 'School'; },
  },
  syllabusType: {
    type: String,
    required: function () { return this.category === 'School'; },
  },
  fee: {
    type: String,
    required: true,
    trim: true,
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
    trim: true,
  },
  careType: {
    type: String,
    required: function () { return this.category === 'ChildCare'; },
  },
  openingHours: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Institute = mongoose.model('Institute', instituteSchema);
export default Institute;
