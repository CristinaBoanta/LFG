import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
  gameTitle: { type: String, required: true },
  gameDescription: { type: String, required: true },
  // platform: { type: String, required: true },
  // region: { type: String, required: true },
  // playstyle: { type: [String], default: [] },
  // description: { type: String },
  // voiceRequired: { type: Boolean, default: false },
  // createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Listing', listingSchema);