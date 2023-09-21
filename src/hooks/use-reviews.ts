import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Review } from '../model/review';
import {
  createReviewThunk,
  deleteReviewThunk,
  getReviewsThunk,
} from '../redux/reviews-thunk';
import { ApiReviewRepository } from '../services/reviews-repository';
import { RootState, TennisZoneDispatch } from '../store/store';

export function useReviews() {
  const repo = useMemo(
    () => new ApiReviewRepository('http://localhost:4300/reviews'),
    []
  );

  const reviewsState = useSelector(
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

  return {
    getReviews,
    reviewsState,
    createReviews,
    deleteReviews,
  };
}
