import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Group {
  _id: string;
  title: string;
  description: string;
  __v: number;
}

interface GroupsState {
  groups: Group[];
  loading: boolean;
  error: string | null;
}

const initialState: GroupsState = {
  groups: [],
  loading: false,
  error: null,
};

const publicGroupsSlice = createSlice({
  name: 'publicGroups',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setPublicGroups: (state, action: PayloadAction<Group[]>) => {
      state.groups = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setPublicGroups, setError } = publicGroupsSlice.actions;

export default publicGroupsSlice.reducer;