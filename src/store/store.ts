import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../redux/usersSlice';

export const tennisZoneStore = configureStore({
  reducer: {
    tennisZoneUsers: usersReducer,
  },
});

export type TennisZoneDispatch = typeof tennisZoneStore.dispatch;
export type RootState = ReturnType<typeof tennisZoneStore.getState>;
