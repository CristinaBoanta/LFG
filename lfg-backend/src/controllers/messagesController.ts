import { Request, Response } from 'express';
import Message, { IMessageDocument } from '../models/Message';

const postMessage = async (req: Request, res: Response) => {
    const { body, groupId, userId } = req.body;
    try {
      const newMessage = new Message({  body, groupId, userId });
      await newMessage.save();
      res.status(201).json(newMessage);
    } catch (err) {
      res.status(400).json({ error: 'Failed to send the message ', err });
    }
};

const getMessages = async (req: Request, res: Response) => {
    const { groupId } = req.body;
  try {
    const messages: IMessageDocument[] = await Message.find({groupId}).sort({createdAt: -1});
    res.status(200).json(messages);
  } catch (err) {
    res.status(400).json({ error: 'Failed to fetch messages ', err });
  }
}

export { postMessage, getMessages };