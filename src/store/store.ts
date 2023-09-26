import { configureStore } from '@reduxjs/toolkit';
import courtsReducer from '../redux/courts-slice';
import reviewsReducer from '../redux/reviews-slice';
import usersReducer from '../redux/users-slice';

export const tennisZoneStore = configureStore({
  reducer: {
    tennisZoneUsers: usersReducer,
    tennisZoneCourts: courtsReducer,
    tennisZoneReviews: reviewsReducer,
  },
});

export type TennisZoneDispatch = typeof tennisZoneStore.dispatch;
export type RootState = ReturnType<typeof tennisZoneStore.getState>;
