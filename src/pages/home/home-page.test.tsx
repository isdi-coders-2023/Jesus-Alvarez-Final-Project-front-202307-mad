import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { tennisZoneStore } from '../../store/store';

import HomePage from './home-page';

describe('Given the page EditReview', () => {
  describe('When it is rendered', () => {
    render(
      <MemoryRouter>
        <Provider store={tennisZoneStore}>
          <HomePage></HomePage>
        </Provider>
      </MemoryRouter>
    );
    test('Then,', () => {
      const altText = screen.getByAltText('A court picture');
      expect(altText).toBeInTheDocument();
    });
  });
});
