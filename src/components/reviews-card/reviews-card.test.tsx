import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { useReviews } from '../../hooks/use-reviews';
import { useUsers } from '../../hooks/use-users';
import { Review } from '../../model/review';
import { tennisZoneStore } from '../../store/store';
import { ReviewCard } from './reviews-card';

jest.mock('../../hooks/use-reviews');
jest.mock('../../hooks/use-users');

describe('Given the ReviewCard component', () => {
  describe('When it is rendered', () => {
    (useReviews as jest.Mock).mockReturnValue({
      ReviewsState: {
        reviews: [],
      },
      deleteReviews: jest.fn(),
      getByIdReview: jest.fn(),
    });
    (useUsers as jest.Mock).mockReturnValue({
      userId: '1',
    });
  });
  beforeEach(() => {
    const mockProp = {
      userId: { id: '1' },
      courtId: { id: '1' },
      description: 'string',

      image: { url: '' },
    } as unknown as Review;
    render(
      <MemoryRouter>
        <Provider store={tennisZoneStore}>
          <ReviewCard review={mockProp}></ReviewCard>
        </Provider>
      </MemoryRouter>
    );
  });
  test('Then an image with altText should be in the document', () => {
    const altText = screen.getByAltText('The image of the review.');
    expect(altText).toBeInTheDocument();
  });
  test('Then, when we click on the delete button', async () => {
    const buttons = screen.getAllByRole('button');
    await userEvent.click(buttons[0]);
    expect(useReviews().deleteReviews).toHaveBeenCalled();
  });
  test('Then, when we click on the delete button', async () => {
    const buttons = screen.getAllByRole('button');
    await userEvent.click(buttons[1]);
    expect(useReviews().getByIdReview).toHaveBeenCalled();
  });
});
