import { Request, Response } from 'express';
import { User } from '../models/userModel';
import jwt from 'jsonwebtoken';

const createToken = (_id: string) => {
   if (!process.env.SECRET) {
     throw new Error('JWT secret is not defined');
   }
   return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' }); 
}

// login user
const loginUser = async (req: Request, res: Response) => {
    
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        
        // create token
        const token = createToken(user._id.toString());
        
        res.status(200).json({ email, username: user.username, token });

        console.log(user, ' <-- yay, i found the user')
    } catch(error: any) {
        console.error('Login error:', error.message);
        res.status(400).json({ error: error.message });
    }
}

// register user
const registerUser = async (req: Request, res: Response) => {
    const { email, password, username } = req.body;
    
    try {
        const user = await User.register(email, password, username);
        
        // create token
        const token = createToken(user._id.toString());
        
        res.status(200).json({ email, token });
    } catch(error: any) {
        console.error('Registration error:', error.message);
        res.status(400).json({ error: error.message });
    }
}

export { loginUser, registerUser };