import express from 'express';
import { postGroup, getGroups } from '../controllers/groupController';
import { requireAuth } from '../middleware/requireAuth';

const router = express.Router();

router.use(requireAuth);

router.post('/', postGroup );

router.get('/', getGroups );

export default router;