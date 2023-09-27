import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    const mockUser = {
      email: 'hola@gmail.com',
      password: 'dfafdaf',
    };
    test('Then, it should render a button', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
    test('Then, when we click on the submit button', async () => {
      const formElement = screen.getByRole('form');
      await fireEvent.submit(formElement);
      expect(useUsers().usersLogin).toHaveBeenCalled();
    });
    test('', async () => {
      const formElement = screen.getByRole('form');
      const inputElements = screen.getAllByRole('textbox');
      await userEvent.type(inputElements[0], mockUser.email);
      // await userEvent.type(inputElements[1], mockUser.password);
      expect(inputElements[0]).toHaveValue(mockUser.email);
      // expect(inputElements[1]).toHaveValue(mockUser.password);
      await fireEvent.submit(formElement);

      expect(useUsers().usersLogin).toHaveBeenCalled();
    });
  });
});
