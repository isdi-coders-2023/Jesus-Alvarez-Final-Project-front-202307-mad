import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider, useDispatch } from 'react-redux';

import { UserLoginData } from '../model/user';
import { tennisZoneStore } from '../store/store';
import { useUsers } from './use-users';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

describe('Given the hook useUsers', () => {
  function TestComponent() {
    const { usersRegister, usersLogin, usersLogout } = useUsers();

    const mockUser = {} as unknown as FormData;
    const mockUser2 = {} as unknown as UserLoginData;

    return (
      <>
        <button role="button" onClick={() => usersRegister(mockUser)}>
          1
        </button>
        <button role="button" onClick={() => usersLogin(mockUser2)}>
          2
        </button>
        <button role="button" onClick={() => usersLogout()}>
          3
        </button>
      </>
    );
  }

  describe('When the component run the hook', () => {
    beforeEach(() => {
      render(
        <Provider store={tennisZoneStore}>
          <TestComponent></TestComponent>
        </Provider>
      );
    });

    test('Then, if we click 1, the state should be rendered', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[0]);
      expect(useDispatch()).toHaveBeenCalled();
    });

    test('Then, if we click 2, the state should be rendered', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[1]);
      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then, if we click 3, the state should changed', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[2]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
