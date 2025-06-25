import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IMessage {
  body: string;
  groupId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
}

export interface IMessageDocument extends IMessage, Document {}

const messageSchema = new mongoose.Schema({
  body: { type: String, required: true },
  groupId: { type: mongoose.Types.ObjectId, required: true, ref: 'Group' },
  userId: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
}, { timestamps: true });

const Message = mongoose.model<IMessageDocument>('Message', messageSchema);
export default Message;