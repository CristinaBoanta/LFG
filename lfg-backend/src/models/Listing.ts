import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
  game: { type: String, required: true },
  platform: { type: String, required: true },
//   region: { type: String, required: true },
  playstyle: { type: [String], default: [] },
  description: { type: String },
  voiceRequired: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Listing', listingSchema);