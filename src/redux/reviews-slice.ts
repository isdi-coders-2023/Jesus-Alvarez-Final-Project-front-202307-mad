import { createSlice } from '@reduxjs/toolkit';
import { Review } from '../model/review';
import {
  createReviewThunk,
  deleteReviewThunk,
  getReviewsThunk,
} from './reviews-thunk';

export type ReviewsState = {
  reviews: Review[];
  reviewsStatus: '' | 'loading' | 'loaded' | 'deleted' | 'created';
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
    builder.addCase(createReviewThunk.pending, (state) => {
      state.reviewsStatus = 'loading';
    });
    builder.addCase(createReviewThunk.fulfilled, (state) => {
      state.reviewsStatus = 'created';
    });
    builder.addCase(deleteReviewThunk.pending, (state) => {
      state.reviewsStatus = 'loading';
    });
    builder.addCase(deleteReviewThunk.fulfilled, (state) => {
      state.reviewsStatus = 'deleted';
    });
  },
});

export const actions = reviewsSlice.actions;
export default reviewsSlice.reducer;
