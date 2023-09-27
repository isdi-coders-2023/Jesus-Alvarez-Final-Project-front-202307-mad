import ReviewsReducer, { ReviewsState, reset } from './reviews-slice';
import { createReviewThunk, updateReviewThunk } from './reviews-thunk';

const mockInitialState: ReviewsState = {
  reviews: [],
  reviewsStatus: '',
  searchedReview: null,
} as ReviewsState;

describe('Given reviews slice', () => {
  describe('When we call for certain actions', () => {
    test('Then it should return the state modified', () => {
      const newState = ReviewsReducer(mockInitialState, reset());
      expect(newState.reviewsStatus).toEqual('');
    });
    test('When the createReviewThunk is rejected', () => {
      const newState = ReviewsReducer(
        mockInitialState,
        createReviewThunk.rejected
      );
      expect(newState.reviewsStatus).toEqual('error');
    });
    test('When the updateReviewThunk is rejected', () => {
      const newState = ReviewsReducer(
        mockInitialState,
        updateReviewThunk.rejected
      );
      expect(newState.reviewsStatus).toEqual('error');
    });
  });
});
