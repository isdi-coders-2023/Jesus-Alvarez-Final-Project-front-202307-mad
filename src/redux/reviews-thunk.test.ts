import { Review } from '../model/review';
import { ApiReviewRepository } from '../services/reviews-repository';
import { tennisZoneStore } from '../store/store';
import {
  createReviewThunk,
  deleteReviewThunk,
  getByIdReviewThunk,
  getReviewsThunk,
  updateReviewThunk,
} from './reviews-thunk';

describe('Given the created thunks for Reviews', () => {
  describe('When we use them', () => {
    const mockRepo = {
      getAll: jest.fn().mockResolvedValue([]),
      create: jest.fn().mockResolvedValue({}),
      delete: jest.fn(),
      getById: jest.fn().mockResolvedValue({}),
      updateReview: jest.fn().mockResolvedValue({}),
    } as unknown as ApiReviewRepository;
    test('Then the getReviewsThunk should call the getAll repo', () => {
      tennisZoneStore.dispatch(getReviewsThunk(mockRepo));
      expect(mockRepo.getAll).toHaveBeenCalled();
    });
    test('Then, when we use the createReviewThunk, the method create() should be called', () => {
      const mockReview = {
        description: '',
      } as unknown as FormData;
      tennisZoneStore.dispatch(
        createReviewThunk({ repo: mockRepo, data: mockReview })
      );
      expect(mockRepo.create).toHaveBeenCalled();
    });
    test('Then, when we use the deleteReviewThunk, the method delete() should be called', () => {
      const mockReview = {
        id: '',
      } as unknown as Review;
      tennisZoneStore.dispatch(
        deleteReviewThunk({ repo: mockRepo, review: mockReview })
      );
      expect(mockRepo.delete).toHaveBeenCalled();
    });
    test('Then, when we use the getByIdReviewThunk, the method getById() should be called', () => {
      const mockReview = {
        id: '',
      } as unknown as Review;
      tennisZoneStore.dispatch(
        getByIdReviewThunk({ repo: mockRepo, review: mockReview })
      );
      expect(mockRepo.getById).toHaveBeenCalled();
    });
    test('Then, when we use the updateReviewThunk, the method updateReview() should be called', () => {
      const mockData = {
        description: '',
        id: '',
      } as unknown as FormData;
      const mockReview = {
        id: '',
      } as unknown as Review;
      tennisZoneStore.dispatch(
        updateReviewThunk({
          repo: mockRepo,
          data: mockData,
          reviewId: mockReview.id,
        })
      );
      expect(mockRepo.updateReview).toHaveBeenCalled();
    });
  });
});
