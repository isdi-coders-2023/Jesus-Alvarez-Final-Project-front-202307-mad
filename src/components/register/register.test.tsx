import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { useUsers } from '../../hooks/use-users';
import { tennisZoneStore } from '../../store/store';
import { Register } from './register';

jest.mock('../../hooks/use-users');

describe('Given the component Register', () => {
  const mockNavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => ({
      navigate: mockNavigate,
    }),
  }));
  describe('When it is rendered', () => {
    const changedState = {
      registerStatus: 'registered',
    };
    (useUsers as jest.Mock).mockReturnValue({
      usersRegister: jest.fn().mockResolvedValue(changedState),
      registerStatus: 'registered',
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
    });
  });
  describe('When it is rendered with an error in the register', () => {
    const changedState = {
      registerStatus: 'registered',
    };
    (useUsers as jest.Mock).mockReturnValue({
      usersRegister: jest.fn().mockResolvedValue(changedState),
      registerStatus: 'error',
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
    test('dfd', async () => {
      const formElement = screen.getByRole('form');
      await fireEvent.submit(formElement);
      expect(useUsers().usersRegister).toHaveBeenCalled();
    });
  });
});
