import { createSlice } from '@reduxjs/toolkit';
import { Review } from '../model/review';
import {
  createReviewThunk,
  deleteReviewThunk,
  getByIdReviewThunk,
  getReviewsThunk,
  updateReviewThunk,
} from './reviews-thunk';

export type ReviewsState = {
  reviews: Review[];
  reviewsStatus:
    | ''
    | 'loading'
    | 'loaded'
    | 'deleted'
    | 'created'
    | 'updated'
    | 'error';
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
    builder.addCase(createReviewThunk.fulfilled, (state, { payload }) => {
      state.reviewsStatus = 'created';
      state.reviews.push(payload);
    });
    builder.addCase(deleteReviewThunk.pending, (state) => {
      state.reviewsStatus = 'loading';
    });
    builder.addCase(
      deleteReviewThunk.fulfilled,
      (state, { payload }: { payload: Review['id'] }) => {
        state.reviews = state.reviews.filter((item) => item.id !== payload);
        state.reviewsStatus = 'deleted';
      }
    );
    builder.addCase(getByIdReviewThunk.pending, (state) => {
      state.searchedReview = null;
    });
    builder.addCase(
      getByIdReviewThunk.fulfilled,
      (state, { payload }: { payload: Review }) => {
        state.searchedReview = payload;
      }
    );
    builder.addCase(updateReviewThunk.pending, (state) => {
      state.reviewsStatus = 'loading';
    });
    builder.addCase(updateReviewThunk.fulfilled, (state) => {
      state.reviewsStatus = 'updated';
    });
    builder.addCase(updateReviewThunk.rejected, (state) => {
      state.reviewsStatus = 'error';
    });
  },
});

export const actions = reviewsSlice.actions;
export default reviewsSlice.reducer;
