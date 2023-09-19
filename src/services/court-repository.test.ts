import { ApiCourtRepository } from './court-repository';

describe('Given the class CourtRepository', () => {
  describe('When it is instantiated', () => {
    const repo = new ApiCourtRepository('');
    test('Then, when we call the method getAll()', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue([]),
      });
      repo.getAll();
      await expect(global.fetch).toHaveBeenCalled();
    });
  });
});
