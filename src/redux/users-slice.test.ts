import UserReducer, { UsersState, logout } from './users-slice';
import { createThunk, loginThunk } from './users-thunks';

const mockInitialState: UsersState = {
  user: undefined,
  token: '',
  userStatus: 'logged',
  registerStatus: '',
  userId: '',
} as UsersState;

describe('Given user slice', () => {
  describe('When we call for certain actions', () => {
    test('Then it should return the state token and id modified', () => {
      const newState = UserReducer(mockInitialState, logout());
      expect(newState.userStatus).toEqual('visitor');
    });
    test('When the loginthunk is rejected', () => {
      const newState = UserReducer(mockInitialState, loginThunk.rejected);
      expect(newState.userStatus).toEqual('visitor');
    });
    test('When the loginthunk is rejected', () => {
      const newState = UserReducer(mockInitialState, createThunk.rejected);
      expect(newState.registerStatus).toEqual('error');
    });
  });
});
