import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  user_id: {
    type: String,
    required: true
  },
  members: {
    type: [String],
    default: []
  }
}, { timestamps: true });

export default mongoose.model('Group', groupSchema);