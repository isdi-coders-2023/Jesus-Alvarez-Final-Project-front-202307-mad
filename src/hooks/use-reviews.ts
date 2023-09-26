import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Review } from '../model/review';
import {
  createReviewThunk,
  deleteReviewThunk,
  getByIdReviewThunk,
  getReviewsThunk,
  updateReviewThunk,
} from '../redux/reviews-thunk';
import { ApiReviewRepository } from '../services/reviews-repository';
import { RootState, TennisZoneDispatch } from '../store/store';

export function useReviews() {
  const repo = useMemo(
    () => new ApiReviewRepository('http://localhost:4300/reviews'),
    []
  );

  const { searchedReview, reviews, reviewsStatus } = useSelector(
    (state: RootState) => state.tennisZoneReviews
  );
  const reviewsDispatch = useDispatch<TennisZoneDispatch>();

  const getReviews = useCallback(async () => {
    reviewsDispatch(getReviewsThunk(repo));
  }, [repo, reviewsDispatch]);

  const createReviews = async (data: FormData) => {
    reviewsDispatch(createReviewThunk({ repo, data }));
  };

  const deleteReviews = async (review: Review) => {
    reviewsDispatch(deleteReviewThunk({ repo, review }));
  };

  const getByIdReview = async (review: Review) => {
    reviewsDispatch(getByIdReviewThunk({ repo, review }));
  };

  const updateReview = async (reviewId: string, data: FormData) => {
    reviewsDispatch(updateReviewThunk({ repo, data, reviewId }));
  };

  return {
    getReviews,
    searchedReview,
    createReviews,
    deleteReviews,
    getByIdReview,
    reviews,
    updateReview,
    reviewsStatus,
  };
}
