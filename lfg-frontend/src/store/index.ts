import { configureStore } from '@reduxjs/toolkit';
import groupsReducer from './groupsSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    groups: groupsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;