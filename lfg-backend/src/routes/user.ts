import express from 'express';
import { loginUser, registerUser } from '../controllers/userController';

const router = express.Router();

// login route
router.post('/login', loginUser)

// register route
router.post('/register', registerUser)

// test route
router.get('/test', async (req, res) => {
    console.log('test route executing');
    res.json({ message: 'Test route' });
})

export default router;