import express from 'express';
import { postGroup, getUserGroups, getPublicGroups } from '../controllers/groupController';
import { requireAuth } from '../middleware/requireAuth';

const router = express.Router();

router.use(requireAuth);

router.post('/', postGroup );

router.get('/', getUserGroups );

router.get('/public', getPublicGroups);

export default router;