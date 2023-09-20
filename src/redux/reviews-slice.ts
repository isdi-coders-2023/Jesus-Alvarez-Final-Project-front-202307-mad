import { createSlice } from '@reduxjs/toolkit';
import { Review } from '../model/review';
import { getReviewsThunk } from './reviews-thunk';

export type ReviewsState = {
  reviews: Review[];
  reviewsStatus: '' | 'loading' | 'loaded';
};

const initialState: ReviewsState = {
  reviews: [],
  reviewsStatus: '',
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviewsThunk.pending, (state) => {
      state.reviewsStatus = 'loading';
    });
    builder.addCase(
      getReviewsThunk.fulfilled,
      (state, { payload }: { payload: Review[] }) => {
        state.reviewsStatus = 'loaded';
        state.reviews = payload;
      }
    );
  },
});

export const actions = reviewsSlice.actions;
export default reviewsSlice.reducer;
