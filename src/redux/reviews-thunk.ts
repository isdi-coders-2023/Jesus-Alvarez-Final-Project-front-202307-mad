import { createAsyncThunk } from '@reduxjs/toolkit';
import { Review } from '../model/review';
import { ApiReviewRepository } from '../services/reviews-repository';

export const getReviewsThunk = createAsyncThunk<Review[], ApiReviewRepository>(
  'reviews/load',
  async (repo) => {
    const reviews = await repo.getAll();
    return reviews;
  }
);

export const createReviewThunk = createAsyncThunk<
  Review,
  {
    repo: ApiReviewRepository;
    data: FormData;
  }
>('reviews/create', async ({ repo, data }) => {
  const fullReview = await repo.create(data);
  return fullReview;
});
