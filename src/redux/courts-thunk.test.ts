import { ApiCourtRepository } from '../services/court-repository';
import { tennisZoneStore } from '../store/store';
import { getCourtsThunk } from './courts-thunk';

describe('Given the getCourtsThunk', () => {
  describe('When we use it', () => {
    test('Then, the method getAll should be called', () => {
      const mockRepo = {
        getAll: jest.fn(),
      } as unknown as ApiCourtRepository;

      tennisZoneStore.dispatch(getCourtsThunk(mockRepo));
      expect(mockRepo.getAll).toHaveBeenCalled();
    });
  });
});
