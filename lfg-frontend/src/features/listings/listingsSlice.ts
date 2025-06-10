import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Listing } from './types';

const API_URL = 'http://localhost:4000/api/listings';

interface ListingsState {
  items: Listing[];
  loading: boolean;
  error: string | null;
}

const initialState: ListingsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchListings = createAsyncThunk('listings/fetch', async () => {
  const res = await fetch(API_URL);
  return (await res.json()) as Listing[];
});

export const postListing = createAsyncThunk('listings/post', async (data: Omit<Listing, '_id'>) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, playstyle: data.playstyle }),
  });
  return (await res.json()) as Listing;
});

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchListings.fulfilled, (state, action: PayloadAction<Listing[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load listings.';
      })
      .addCase(postListing.fulfilled, (state, action: PayloadAction<Listing>) => {
        state.items.unshift(action.payload);
      });
  },
});

export default listingsSlice.reducer;