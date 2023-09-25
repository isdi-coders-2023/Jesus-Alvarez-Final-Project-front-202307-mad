import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { useCourts } from '../../hooks/use-courts';
import { useReviews } from '../../hooks/use-reviews';
import { tennisZoneStore } from '../../store/store';
import { Reviews } from './reviews';

jest.mock('../../hooks/use-reviews');
jest.mock('../../hooks/use-courts');
jest.mock('../reviews-card/reviews-card');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

describe('Given the component Reviews', () => {
  describe('When it is rendered', () => {
    (useReviews as jest.Mock).mockReturnValue({
      reviews: [{ courtId: '1' }],

      getReviews: jest.fn(),
    });
    (useCourts as jest.Mock).mockReturnValue({
      courts: [{ id: '1' }],
    });
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={tennisZoneStore}>
            <Reviews></Reviews>
          </Provider>
        </MemoryRouter>
      );
    });
    test('Then, a Div should be in the document', () => {
      const list = screen.getByRole('list');
      expect(list).toBeInTheDocument();
    });
  });
});
