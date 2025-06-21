import express from 'express';
import { postGroup, getGroups } from '../controllers/groupController';

const router = express.Router();

router.post('/', postGroup );

router.get('/', getGroups );

export default router;