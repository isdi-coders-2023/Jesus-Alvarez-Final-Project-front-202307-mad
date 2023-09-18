import { createSlice } from '@reduxjs/toolkit';
import { User } from '../model/user';
import { createThunk, loginThunk } from './usersThunks';

export type UsersState = {
  user: User[];
  userStatus: 'logged' | 'visitor';
  registerStatus: 'registered' | 'error' | '';
  token: string | undefined;
};

const initialState: UsersState = {
  user: [],
  userStatus: 'visitor',
  registerStatus: '',
  token: localStorage.getItem('userToken') as string,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.userStatus = 'visitor';
    });
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => ({
      ...state,
      token: payload.token,

      userStatus: 'logged',
    }));
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
