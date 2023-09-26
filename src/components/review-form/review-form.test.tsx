import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { useCourts } from '../../hooks/use-courts';
import { useReviews } from '../../hooks/use-reviews';
import { useUsers } from '../../hooks/use-users';
import { tennisZoneStore } from '../../store/store';
import { ReviewForm } from './review-form';

jest.mock('../../hooks/use-courts');
jest.mock('../../hooks/use-users');
jest.mock('../../hooks/use-reviews');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

describe('Given the component ReviewForm', () => {
  describe('When it is rendered', () => {
    (useReviews as jest.Mock).mockReturnValue({
      createReviews: jest.fn(),
    });
    (useUsers as jest.Mock).mockReturnValue({
      userId: 'jest.fn()',
    });
    (useCourts as jest.Mock).mockReturnValue({
      courts: [{ id: '1' }],
    });
    render(
      <MemoryRouter>
        <Provider store={tennisZoneStore}>
          <ReviewForm></ReviewForm>
        </Provider>
      </MemoryRouter>
    );

    // test('Then a button should be in the document', () => {
    //   const button = screen.getByRole('button');
    //   expect(button).toBeInTheDocument();
    // });
    test('Then when we click on the submit button', async () => {
      const formElement = screen.getByRole('form');

      await fireEvent.submit(formElement);
      expect(useReviews().createReviews).toHaveBeenCalled();
    });
  });
});
