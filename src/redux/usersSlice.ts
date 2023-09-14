import { createSlice } from '@reduxjs/toolkit';
import { User } from '../model/user';
import { loginThunk } from './usersThunks';

export type UsersState = {
  user: User[];
  userStatus: 'logged' | 'visitor';
};

const initialState: UsersState = {
  user: [],
  userStatus: 'visitor',
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.userStatus = 'visitor';
    });
    builder.addCase(loginThunk.fulfilled, (state) => {
      state.userStatus = 'logged';
    });
  },
});

export const actions = usersSlice.actions;
export default usersSlice.reducer;
