import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useUsers } from '../../hooks/useUsers';
import { tennisZoneStore } from '../../store/store';
import { Register } from './register';

jest.mock('../../hooks/useUsers');

describe('Given the component Register', () => {
  describe('When it is rendered', () => {
    (useUsers as jest.Mock).mockReturnValue({ usersRegister: jest.fn() });

    beforeEach(() => {
      render(
        <Provider store={tennisZoneStore}>
          <Register></Register>
        </Provider>
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
});