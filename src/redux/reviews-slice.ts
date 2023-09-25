import { createSlice } from '@reduxjs/toolkit';
import { Review } from '../model/review';
import {
  createReviewThunk,
  deleteReviewThunk,
  getByIdReviewThunk,
  getReviewsThunk,
} from './reviews-thunk';

export type ReviewsState = {
  reviews: Review[];
  reviewsStatus: '' | 'loading' | 'loaded' | 'deleted' | 'created';
  searchedReview: Review | null;
};

const initialState: ReviewsState = {
  reviews: [],
  reviewsStatus: '',
  searchedReview: null,
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
    builder.addCase(getByIdReviewThunk.pending, (state) => {
      state.searchedReview = null;
    });
    builder.addCase(
      getByIdReviewThunk.fulfilled,
      (state, { payload }: { payload: Review }) => {
        state.searchedReview = payload;
      }
    );
  },
});

export const actions = reviewsSlice.actions;
export default reviewsSlice.reducer;
