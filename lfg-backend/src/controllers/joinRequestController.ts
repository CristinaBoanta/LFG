import { Request, Response } from 'express';
import JoinRequest from '../models/JoinRequest';
import Group from '../models/Group';
import { GroupErrorCodes, JoinRequestErrorCodes, ERROR_MESSAGES, ERROR_STATUS_CODES } from '../errors/errorCodes';

const createJoinRequest = async (req: Request, res: Response) => {
    const { group_id } = req.body;

    try {
        const requester_id = req.user._id;

        const group = await Group.findById(group_id);
        if (!group) {
            res.status(ERROR_STATUS_CODES[GroupErrorCodes.GROUP_NOT_FOUND])
               .json({ 
                 error: GroupErrorCodes.GROUP_NOT_FOUND,
                 message: ERROR_MESSAGES[GroupErrorCodes.GROUP_NOT_FOUND] 
               });
            return;
        }

        if (group.members.includes(requester_id)) {
            // res.status(400).json({ error: 'You are already a member of this group' });
            res.status(ERROR_STATUS_CODES[GroupErrorCodes.ALREADY_A_MEMBER])
            .json({ 
              error: GroupErrorCodes.ALREADY_A_MEMBER,
              message: ERROR_MESSAGES[GroupErrorCodes.ALREADY_A_MEMBER] 
            });
            return;
        }

        const existingRequest = await JoinRequest.findOne({
            requester_id,
            group_id,
            status: 'pending'
        });

        if (existingRequest) {
            // res.status(400).json({ error: 'You already have a pending request for this group' });
            res.status(ERROR_STATUS_CODES[JoinRequestErrorCodes.DUPLICATE_REQUEST])
            .json({ 
              error: JoinRequestErrorCodes.DUPLICATE_REQUEST,
              message: ERROR_MESSAGES[JoinRequestErrorCodes.DUPLICATE_REQUEST] 
            });
            return;
        }

        const newJoinRequest = new JoinRequest({
            requester_id,
            group_id,
            status: 'pending'
        });

        await newJoinRequest.save();
        res.status(201).json(newJoinRequest);

    } catch (err) {
        res.status(400).json(ERROR_MESSAGES[JoinRequestErrorCodes.REQUEST_CREATION_FAILED]);
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
        const joinRequest = await JoinRequest.findById(requestId);
        if (!joinRequest) {
            res.status(404).json({ error: 'Join request not found' });
            return;
        }
        
        const group = await Group.findById(joinRequest.group_id);
        
        if (!group || group.user_id !== req.user._id.toString()) {
            res.status(403).json({ error: 'Only group owner can approve requests' });
            return;
        }
        
        joinRequest.status = 'approved';
        await joinRequest.save();
        
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
        const joinRequest = await JoinRequest.findById(requestId);
        if (!joinRequest) {
            res.status(404).json({ error: 'Join request not found' });
            return;
        }
        
        const group = await Group.findById(joinRequest.group_id);
        if (!group || group.user_id !== req.user._id.toString()) {
            res.status(403).json({ error: 'Only group owner can reject requests' });
            return;
        }
        
        joinRequest.status = 'rejected';
        await joinRequest.save();
        
        res.status(200).json({ message: 'Join request rejected', joinRequest });
        
    } catch (err) {
        res.status(500).json({ error: 'Failed to reject join request', err });
    }
};

export { createJoinRequest, getGroupJoinRequests, approveJoinRequest, rejectJoinRequest }; 