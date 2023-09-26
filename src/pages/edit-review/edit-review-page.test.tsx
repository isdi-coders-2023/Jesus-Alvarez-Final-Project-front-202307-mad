import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { tennisZoneStore } from '../../store/store';

import { EditReviewPage } from './edit-review-page';

describe('Given the page EditReview', () => {
  describe('When it is rendered', () => {
    render(
      <MemoryRouter>
        <Provider store={tennisZoneStore}>
          <EditReviewPage></EditReviewPage>
        </Provider>
      </MemoryRouter>
    );
    test('Then,', () => {
      const element = screen.getByRole('form');
      expect(element).toBeInTheDocument();
    });
  });
});
