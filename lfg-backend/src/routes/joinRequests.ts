import express from 'express';
import { createJoinRequest, getGroupJoinRequests, approveJoinRequest, rejectJoinRequest } from '../controllers/joinRequestController';
import { requireAuth } from '../middleware/requireAuth';

const router = express.Router();

router.use(requireAuth);

router.post('/', createJoinRequest);

router.get('/', getGroupJoinRequests);

router.put('/:requestId/approve', approveJoinRequest);

router.put('/:requestId/reject', rejectJoinRequest);

export default router; 