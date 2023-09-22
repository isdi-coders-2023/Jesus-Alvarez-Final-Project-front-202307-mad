import { createSlice } from '@reduxjs/toolkit';

import { User } from '../model/user';
import { createThunk, loginThunk } from './users-thunks';

export type UsersState = {
  user: User | undefined;
  userStatus: 'logged' | 'visitor' | 'loading';
  registerStatus: 'registered' | 'error' | '';
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
    // logout: (state) => {
    //   state.userId = '';
    // },
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
    builder.addCase(createThunk.pending, (state) => {
      state.registerStatus = '';
    });
    builder.addCase(createThunk.fulfilled, (state) => {
      state.registerStatus = 'registered';
    });
  },
});

export const actions = usersSlice.actions;
export default usersSlice.reducer;
