import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { User } from '../models/userModel';

const requireAuth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // verify auth
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(401).json({error: 'Authorization token required'});
        return;
    }

    const token = authorization.split(' ')[1];

    if (!process.env.SECRET) {
        res.status(500).json({error: 'Server configuration error'});
        return;
    }

    try {
        const {_id} = jwt.verify(token, process.env.SECRET) as {_id: string}
        req.user = await User.findOne({ _id }).select('_id')
        next()

    } catch (error) {
        console.log(error);
        res.status(401).json({error: 'Request is not authorized'})
    }
}

export { requireAuth };