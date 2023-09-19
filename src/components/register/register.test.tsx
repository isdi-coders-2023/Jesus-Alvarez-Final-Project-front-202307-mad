import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { useUsers } from '../../hooks/use-users';
import { tennisZoneStore } from '../../store/store';
import { Register } from './register';

jest.mock('../../hooks/useUsers');

describe('Given the component Register', () => {
  describe('When it is rendered', () => {
    const changedState = {
      registerStatus: 'registered',
    };
    (useUsers as jest.Mock).mockReturnValue({
      usersRegister: jest.fn().mockResolvedValue(changedState),
      usersState: { registerStatus: 'registered' },
    });
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={tennisZoneStore}>
            <Register></Register>
          </Provider>
        </MemoryRouter>
      );
    });

    test('Then it should render a button', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
    test('Then, when we click on the submit button', async () => {
      const formElement = screen.getByRole('form');
      await fireEvent.submit(formElement);
      expect(useUsers().usersRegister).toHaveBeenCalled();
      expect(changedState.registerStatus).toEqual('registered');
    });
  });
});
