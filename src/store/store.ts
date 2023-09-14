import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

export const tennisZoneStore = configureStore({
  reducer: {
    tennisZoneUsers: () => {},
  },
});

export type TennisZoneDispatch = typeof tennisZoneStore.dispatch;
export type RootState = ReturnType<typeof tennisZoneStore.getState>;

export type TennisZoneThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
