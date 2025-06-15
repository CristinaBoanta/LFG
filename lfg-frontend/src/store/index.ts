import { configureStore } from '@reduxjs/toolkit';
import listingsReducer from './listingsSlice';

export const store = configureStore({
  reducer: {
    listings: listingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;