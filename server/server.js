// backend/server.js
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import BlogRoutes from './routes/blogRoutes.js';
import instituteRoutes from './routes/instituteRoutes.js';
import subscriberRoutes from './routes/subscriber.js';
import contactRoutes from './routes/contactR.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

// Connect to the database
connectDB();

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Init Middleware
app.use(cors());
app.use(express.json());
// Define Routes
app.use('/api/users', authRoutes);
app.use('/api/register', instituteRoutes);
app.use('/api/blog', BlogRoutes);
app.use('/api/subscribe', subscriberRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
