import { createSlice } from '@reduxjs/toolkit';

import { User } from '../model/user';
import { createThunk, loginThunk } from './users-thunks';

export type UsersState = {
  user: User | undefined;
  userStatus: 'logged' | 'visitor' | 'loading';
  registerStatus: 'registered' | 'error' | 'loading' | '';
  token: string | undefined;
  userId: string | undefined;
};

const initialState: UsersState = {
  user: undefined,
  token: '',
  userStatus: 'visitor',
  registerStatus: '',
  userId: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.user = undefined;
      state.userStatus = 'visitor';
      state.token = '';
      state.userId = '';
      state.registerStatus = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.userStatus = 'loading';
    });
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.userId = payload.user.id;
      state.userStatus = 'logged';
    });
    builder.addCase(loginThunk.rejected, (state) => {
      state.userStatus = 'visitor';
    });
    builder.addCase(createThunk.pending, (state) => {
      state.registerStatus = 'loading';
    });
    builder.addCase(createThunk.fulfilled, (state) => {
      state.registerStatus = 'registered';
    });
    builder.addCase(createThunk.rejected, (state) => {
      state.registerStatus = 'error';
    });
  },
});

export const { logout } = usersSlice.actions;
export default usersSlice.reducer;
