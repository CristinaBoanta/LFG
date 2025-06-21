import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Group', groupSchema);