import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { useCourts } from '../../hooks/use-courts';
import { Court } from '../../model/court';
import { tennisZoneStore } from '../../store/store';
import { CourtReviews } from './court-reviews';

jest.mock('../../hooks/use-courts');

describe('Given the component court-reviews', () => {
  describe('When it is rendered', () => {
    const mockCourt = [
      {
        id: '1',
        pictures: {
          url: 'string',
        },
        name: '',
        location: '',
        surface: '',
      },
    ] as unknown as Court[];

    jest.spyOn(Array.prototype, 'find').mockReturnValue({
      id: '1',
      pictures: {
        url: 'string',
      },
      name: '',
      location: '',
      surface: '',
    });

    (useCourts as jest.Mock).mockReturnValue({
      courtsState: { courts: mockCourt },
    });

    beforeEach(() => {
      jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: () => ({
          id: '1',
        }),
      }));
      render(
        <MemoryRouter>
          <Provider store={tennisZoneStore}>
            <CourtReviews></CourtReviews>
          </Provider>
        </MemoryRouter>
      );
    });

    test('Then, a link with the button role should be in the document', () => {
      const link = screen.getByRole('button');
      expect(link).toBeInTheDocument();
    });
  });
});
