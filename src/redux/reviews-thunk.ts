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

export const deleteReviewThunk = createAsyncThunk<
  Review['id'],
  {
    repo: ApiReviewRepository;
    review: Review;
  }
>('reviews/delete', async ({ repo, review }) => {
  await repo.delete(review.id);

  return review.id;
});

export const getByIdReviewThunk = createAsyncThunk<
  Review,
  {
    repo: ApiReviewRepository;
    review: Review;
  }
>('reviews/getById', async ({ repo, review }) => {
  const getReview = await repo.getById(review.id);

  return getReview;
});

export const updateReviewThunk = createAsyncThunk<
  Review,
  {
    repo: ApiReviewRepository;
    data: FormData;
    reviewId: string;
  }
>('reviews/update', async ({ repo, data, reviewId }) => {
  const updatedReview = await repo.updateReview(reviewId, data);
  return updatedReview;
});
