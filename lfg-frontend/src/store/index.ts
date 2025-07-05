import { configureStore } from '@reduxjs/toolkit';
import userGroupsReducer from './userGroupsSlice';
import publicGroupsReducer from './publicGroupsSlice';
import authReducer from './authSlice';
import joinRequestsReducer from './joinRequests';

export const store = configureStore({
  reducer: {
    userGroups: userGroupsReducer,
    publicGroups: publicGroupsReducer,
    auth: authReducer,
    joinRequests: joinRequestsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;