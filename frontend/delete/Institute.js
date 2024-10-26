// models/Institute.js
import mongoose from 'mongoose';

const InstituteSchema = new mongoose.Schema({
  Category: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  Location: {
    type: String,
    required: true 
  },
  Type: {
    type: String,
    required: true
  },
  Rank: {
    type: String,
    required: true
  },
  Grades: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  NofStd: {
    type: Number,
    required: true
  },
  R_Nu: {
    type: String,
    required: true
  }
});

const Institute = mongoose.model('Institute', InstituteSchema);

export default Institute;
