import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  // platform: { type: String, required: true },
  // region: { type: String, required: true },
  // playstyle: { type: [String], default: [] },
  // description: { type: String },
  // voiceRequired: { type: Boolean, default: false },
  // createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Group', groupSchema);