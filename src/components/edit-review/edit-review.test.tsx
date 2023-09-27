import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { useReviews } from '../../hooks/use-reviews';
import { tennisZoneStore } from '../../store/store';
import { EditReview } from './edit-review';
jest.mock('../../hooks/use-reviews');

jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));

describe('Given the component EditReview', () => {
  describe('When it is rendered', () => {
    const mockNavigate = jest.fn();

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => ({
        navigate: mockNavigate,
      }),
    }));

    (useReviews as jest.Mock).mockReturnValue({
      searchedReview: {},
      updateReview: jest.fn(),
      reviewStatus: 'loading',
    });

    render(
      <MemoryRouter>
        <Provider store={tennisZoneStore}>
          <EditReview></EditReview>
        </Provider>
      </MemoryRouter>
    );

    test('Then,', async () => {
      const element = screen.getByRole('form');
      expect(element).toBeInTheDocument();
      await fireEvent.submit(element);
      expect(useReviews().updateReview).toHaveBeenCalled();
    });
  });
});
