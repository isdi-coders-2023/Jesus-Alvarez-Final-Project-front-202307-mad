import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { tennisZoneStore } from '../../store/store';

import RegisterPage from './register-page';

describe('Given the page ProfilePage', () => {
  describe('When it is rendered', () => {
    render(
      <MemoryRouter>
        <Provider store={tennisZoneStore}>
          <RegisterPage></RegisterPage>
        </Provider>
      </MemoryRouter>
    );
    test('Then,', () => {
      const element = screen.getByRole('form');
      expect(element).toBeInTheDocument();
    });
  });
});
