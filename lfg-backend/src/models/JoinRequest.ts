import mongoose from 'mongoose';

const joinRequestSchema = new mongoose.Schema({
  requester_id: {
    type: String,
    required: true
  },
  group_id: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, { timestamps: true });

export default mongoose.model('JoinRequest', joinRequestSchema); 