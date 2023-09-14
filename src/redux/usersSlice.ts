import { createSlice } from '@reduxjs/toolkit';
import { User } from '../model/user';

export type UsersState = {
  user: User[];
};

const initialState: UsersState = {
  user: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
});

export const actions = usersSlice.actions;
export default usersSlice.reducer;
