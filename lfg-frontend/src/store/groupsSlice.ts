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

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setGroups: (state, action: PayloadAction<Group[]>) => {
      state.groups = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setGroups, setError } = groupsSlice.actions;

export default groupsSlice.reducer;