import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReviewThunk, getReviewsThunk } from '../redux/reviews-thunk';
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

  return {
    getReviews,
    reviewsState,
    createReviews,
  };
}
