import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface JoinRequest {
  _id: string;
  requester_id: string;
  group_id: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface JoinRequests {
    joinRequestList: JoinRequest[];
}

const initialState: JoinRequests = { 
    joinRequestList: []
};

const joinRequestsSlice = createSlice({
  name: 'joinRequests',
  initialState,
  reducers: {
    setJoinRequests: (state, action: PayloadAction<JoinRequest[]>) => {
      state.joinRequestList = action.payload;
    },
  },
});

export const { setJoinRequests } = joinRequestsSlice.actions;
export default joinRequestsSlice.reducer; 