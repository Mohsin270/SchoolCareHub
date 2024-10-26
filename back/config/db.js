import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Database connection error-----:', err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
