import { Request, Response } from 'express';
import Group from '../models/Group';

const postGroup = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    try {
      const newGroup = new Group({ title, description });
      await newGroup.save();
      res.status(201).json(newGroup);
    } catch (err) {
      res.status(400).json({ error: 'Failed to save item ', err });
    }
};

const getGroups = async (req: Request, res: Response) => {
  try {
    const groups = await Group.find({}).sort({createdAt: -1});
    res.status(200).json(groups);
  } catch (err) {
    res.status(400).json({ error: 'Failed to fetch items ', err });
  }
}

export { postGroup, getGroups };