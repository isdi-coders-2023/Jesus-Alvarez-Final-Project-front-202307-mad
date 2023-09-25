import { ApiReviewRepository } from './reviews-repository';

describe('Given the class ApiReviewRepository', () => {
  describe('When it is instantiated', () => {
    const reviewMockRepo = new ApiReviewRepository('');
    test('Then, when we call the getAll() method', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(['Test']),
      });
      await reviewMockRepo.getAll();
      expect(global.fetch).toHaveBeenCalled();
    });
    test('Then, when we call the getById() method', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue({}),
      });
      await reviewMockRepo.getById('');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('Then, when we called the updateReview() method', async () => {
      const mockData = {} as unknown as FormData;
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue({}),
      });
      await reviewMockRepo.updateReview('', mockData);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('Then, when we called the create() method', async () => {
      const mockData = {} as unknown as FormData;
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue({}),
      });
      await reviewMockRepo.create(mockData);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('Then, when we called the create() method with error', async () => {
      const mockData = {} as unknown as FormData;
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue({}),
      });
      expect(reviewMockRepo.create(mockData)).rejects.toThrow();
    });
    test('Then, when we use the delete() method', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn(),
      });
      await reviewMockRepo.delete('');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('Then, when we use the delete() method with error', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn(),
      });

      expect(reviewMockRepo.delete('')).rejects.toThrow();
    });
  });
});
