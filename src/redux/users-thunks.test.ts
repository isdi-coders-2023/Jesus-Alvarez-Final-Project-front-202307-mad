import { UserLoginData } from '../model/user';
import { ApiUserRepository } from '../services/user-repository';
import { tennisZoneStore } from '../store/store';
import { createThunk, loginThunk } from './users-thunks';

describe('Given the thunks created', () => {
  describe('When we use them', () => {
    test('Then, the createThunk should call the repo', () => {
      const mockRepo = {
        create: jest.fn(),
      } as unknown as ApiUserRepository;
      const mockUser = {
        email: '',
      } as unknown as FormData;
      tennisZoneStore.dispatch(createThunk({ repo: mockRepo, data: mockUser }));
      expect(mockRepo.create).toHaveBeenCalled();
    });
    test('Then, the loginThunk should call the repo', () => {
      const mockRepo = {
        login: jest.fn().mockResolvedValue({ token: '', user: {} }),
      } as unknown as ApiUserRepository;
      const mockUser = {
        email: '',
      } as unknown as UserLoginData;

      tennisZoneStore.dispatch(loginThunk({ repo: mockRepo, user: mockUser }));
      expect(mockRepo.login).toHaveBeenCalled();
    });
  });
});
