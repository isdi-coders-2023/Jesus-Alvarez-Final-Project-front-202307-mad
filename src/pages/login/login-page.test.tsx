import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { tennisZoneStore } from '../../store/store';

import { Login } from '../../components/login/login';

describe('Given the page EditReview', () => {
  describe('When it is rendered', () => {
    render(
      <MemoryRouter>
        <Provider store={tennisZoneStore}>
          <Login></Login>
        </Provider>
      </MemoryRouter>
    );
    test('Then,', () => {
      const form = screen.getByRole('form');
      expect(form).toBeInTheDocument();
    });
  });
});
