import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { useUsers } from '../../hooks/use-users';
import { tennisZoneStore } from '../../store/store';
import { Login } from './login';

jest.mock('../../hooks/use-users');

describe('Given the component Login', () => {
  describe('When it is rendered with visitor status ', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => ({
        navigate: mockNavigate,
      }),
    }));
    (useUsers as jest.Mock).mockReturnValue({
      userStatus: 'visitor',
      usersLogin: jest.fn(),
    });

    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={tennisZoneStore}>
            <Login></Login>
          </Provider>
        </MemoryRouter>
      );
    });

    test('Then, it should render a button', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
    test('Then, when we click on the submit button', async () => {
      const formElement = screen.getByRole('form');
      await fireEvent.submit(formElement);
      expect(useUsers().usersLogin).toHaveBeenCalled();
    });
  });
});

describe('Given the component login', () => {
  describe('When it is rendered with logged status', () => {
    const mockNavigate = jest.fn().mockReturnValue(jest.fn());
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => ({
        navigate: mockNavigate,
      }),
    }));
    (useUsers as jest.Mock).mockReturnValue({
      userStatus: 'logged',
      usersLogin: jest.fn(),
    });

    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={tennisZoneStore}>
            <Login></Login>
          </Provider>
        </MemoryRouter>
      );
    });

    test('Then you should navigate to home', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
