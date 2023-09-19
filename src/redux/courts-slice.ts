import { createSlice } from '@reduxjs/toolkit';
import { Court } from '../model/court';
import { getCourtsThunk } from './courts-thunk';

export type CourtsState = {
  courts: Court[];
  courtsStatus: 'loading' | 'loaded' | '';
};

const initialState: CourtsState = {
  courts: [],
  courtsStatus: '',
};
const courtsSlice = createSlice({
  name: 'courts',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCourtsThunk.pending, (state) => {
      state.courtsStatus = 'loading';
    });
    builder.addCase(
      getCourtsThunk.fulfilled,
      (state, { payload }: { payload: Court[] }) => {
        state.courtsStatus = 'loaded';
        state.courts = payload;
      }
    );
  },
});

export const actions = courtsSlice.actions;
export default courtsSlice.reducer;
