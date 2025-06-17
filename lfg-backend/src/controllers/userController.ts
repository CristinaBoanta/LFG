import { Request, Response } from 'express';
import { User } from '../models/userModel';

// login user
const loginUser = async (req: Request, res: Response) => {
    res.json({ message: 'Login user' });
}

// register user
const registerUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    console.log('Request body:', req.body);
    console.log('Email type:', typeof email);
    console.log('Email value:', email);
    
    try {
        const user = await User.register(email, password);
        res.json({ message: 'User registered successfully', user });
    } catch(error: any) {
        console.error('Registration error:', error.message);
        res.status(400).json({ error: error.message });
    }
}

export { loginUser, registerUser };