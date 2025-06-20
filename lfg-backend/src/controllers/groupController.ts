import { Request, Response } from 'express';
import Group from '../models/Group';

const postGroup = async (req: Request, res: Response) => {
    console.log(req);

    const { title, description } = req.body;
    try {
      const newGroup = new Group({ title, description });
      await newGroup.save();
      res.status(201).json(newGroup);
    } catch (err) {
      res.status(400).json({ error: 'Failed to save item ', err });
    }
};

export { postGroup };