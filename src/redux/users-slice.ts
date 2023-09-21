import { createSlice } from '@reduxjs/toolkit';

import { User } from '../model/user';
import { createThunk, loginThunk } from './users-thunks';

export type UsersState = {
  user: User[];
  userStatus: 'logged' | 'visitor';
  registerStatus: 'registered' | 'error' | '';
  token: string | undefined;
  userId: string;
  userFirstName: string;
};

const initialState: UsersState = {
  user: [],
  userFirstName: localStorage.getItem('currentUserFirstName') as string,
  userId: localStorage.getItem('currentUserId') as string,
  userStatus: 'visitor',
  registerStatus: '',
  token: localStorage.getItem('userToken') as string,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.userId = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.userStatus = 'visitor';
    });
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.userFirstName = payload.user.firstName;
      state.userId = payload.user.id;

      state.userStatus = 'logged';
    });
    builder.addCase(createThunk.pending, (state) => {
      state.registerStatus = '';
    });
    builder.addCase(createThunk.fulfilled, (state) => {
      state.registerStatus = 'registered';
    });
  },
});

export const { logout } = usersSlice.actions;
export default usersSlice.reducer;
