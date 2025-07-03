import { Request, Response } from 'express';
import JoinRequest from '../models/JoinRequest';
import Group from '../models/Group';

const createJoinRequest = async (req: Request, res: Response) => {
    const { group_id } = req.body;

    try {
        const requester_id = req.user._id;
        console.log(requester_id, " requesterId");

        // Check if group exists
        const group = await Group.findById(group_id);
        if (!group) {
            res.status(404).json({ error: 'Group not found' });
            return;
        }

        // Check if user is already a member
        if (group.members.includes(requester_id)) {
            res.status(400).json({ error: 'You are already a member of this group' });
            return;
        }

        // Check if user already has a pending request
        const existingRequest = await JoinRequest.findOne({
            requester_id,
            group_id,
            status: 'pending'
        });

        if (existingRequest) {
            res.status(400).json({ error: 'You already have a pending request for this group' });
            return;
        }

        // Create new join request
        const newJoinRequest = new JoinRequest({
            requester_id,
            group_id,
            status: 'pending'
        });

        await newJoinRequest.save();
        res.status(201).json(newJoinRequest);

    } catch (err) {
        res.status(400).json({ error: 'Failed to create join request', err });
    }
};

const getGroupJoinRequests = async (req: Request, res: Response) => {
    console.log('get join requests controller working properly')
    try {
        // the id of the user who makes the request
        const user_id = req.user._id;
        const groups = await Group.find({ user_id });
        const groupIDs = groups.map((group) => {
            return group._id;
        })
        const joinRequest = await JoinRequest.find({
            group_id: { $in: groupIDs }
        });

        res.status(200).json(joinRequest);

    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch join requests', err });
    }
};

const approveJoinRequest = async (req: Request, res: Response) => {
    const { requestId } = req.params;
    
    try {
        // Find the join request
        const joinRequest = await JoinRequest.findById(requestId);
        if (!joinRequest) {
            res.status(404).json({ error: 'Join request not found' });
            return;
        }
        
        console.log('Join Request found:', joinRequest);
        console.log('Group ID from request:', joinRequest.group_id);
        console.log('Current user ID:', req.user._id);
        
        // Check if user owns the group
        const group = await Group.findById(joinRequest.group_id);
        console.log('Group found:', group);
        console.log('Group owner ID:', group?.user_id);
        console.log('Are they equal?', group?.user_id === req.user._id.toString());
        
        if (!group || group.user_id !== req.user._id.toString()) {
            res.status(403).json({ error: 'Only group owner can approve requests' });
            return;
        }
        
        // Update request status to approved
        joinRequest.status = 'approved';
        await joinRequest.save();
        
        // Add user to group members
        if (!group.members.includes(joinRequest.requester_id)) {
            group.members.push(joinRequest.requester_id);
            await group.save();
        }
        
        res.status(200).json({ message: 'Join request approved', joinRequest });
        
    } catch (err) {
        res.status(500).json({ error: 'Failed to approve join request', err });
    }
};

const rejectJoinRequest = async (req: Request, res: Response) => {
    const { requestId } = req.params;
    
    try {
        // Find the join request
        const joinRequest = await JoinRequest.findById(requestId);
        if (!joinRequest) {
            res.status(404).json({ error: 'Join request not found' });
            return;
        }
        
        // Check if user owns the group
        const group = await Group.findById(joinRequest.group_id);
        if (!group || group.user_id !== req.user._id.toString()) {
            res.status(403).json({ error: 'Only group owner can reject requests' });
            return;
        }
        
        // Update request status to rejected
        joinRequest.status = 'rejected';
        await joinRequest.save();
        
        res.status(200).json({ message: 'Join request rejected', joinRequest });
        
    } catch (err) {
        res.status(500).json({ error: 'Failed to reject join request', err });
    }
};

export { createJoinRequest, getGroupJoinRequests, approveJoinRequest, rejectJoinRequest }; 