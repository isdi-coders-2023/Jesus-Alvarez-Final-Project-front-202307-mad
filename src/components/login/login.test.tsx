import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useUsers } from '../../hooks/use-users';
import { tennisZoneStore } from '../../store/store';
import { Login } from './login';

jest.mock('../../hooks/useUsers');

describe('Given the component Login', () => {
  describe('When it is rendered', () => {
    (useUsers as jest.Mock).mockReturnValue({ usersLogin: jest.fn() });

    beforeEach(() => {
      render(
        <Provider store={tennisZoneStore}>
          <Login></Login>
        </Provider>
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
