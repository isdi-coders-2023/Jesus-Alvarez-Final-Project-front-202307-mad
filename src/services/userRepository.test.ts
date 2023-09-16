import { UserLoginData } from '../model/user';
import { ApiUserRepository } from './userRepository';

describe('Given the class ApiUserRepository', () => {
  describe('When it is instantiated', () => {
    const repo = new ApiUserRepository('');
    const item = { '': '' } as unknown as FormData;
    const item2 = { '': '' } as unknown as UserLoginData;
    test('Then, when we call the create() method', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(['Test']),
      });
      await repo.create(item);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('When the method create() throws and error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue(['error']),
      });

      expect(repo.create(item)).rejects.toThrow();
    });
    test('When we call the login() method', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(['Test']),
      });
      await repo.login(item2);
      expect(global.fetch).toHaveBeenCalled();
    });
  });
});
