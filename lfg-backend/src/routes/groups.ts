import express from 'express';
import { postGroup } from '../controllers/groupController';

const router = express.Router();

router.post('/', postGroup );

export default router;