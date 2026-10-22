import 'dotenv/config';
import mongoose from 'mongoose';
import app from './app.js';
const port = process.env.PORT || 5000;
try {
  if (!process.env.MONGODB_URI || !process.env.JWT_SECRET) throw new Error('Set MONGODB_URI and JWT_SECRET in server/.env');
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('MongoDB connected');
  app.listen(port, () => console.log(`NexCRM API running on http://localhost:${port}`));
} catch (e) { console.error('Startup failed:', e.message); process.exit(1); }
