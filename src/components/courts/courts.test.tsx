import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { useCourts } from '../../hooks/use-courts';
import { tennisZoneStore } from '../../store/store';
import { Courts } from './courts';

jest.mock('../../hooks/use-courts');

jest.mock('../court-card/court-card', () => {
  return {
    CourtCard: jest.fn(() => <div>CourtCard mock</div>),
  };
});

describe('Given the component Courts', () => {
  describe('When it is rendered', () => {
    (useCourts as jest.Mock).mockReturnValue({
      courts: [{}, {}],

      getCourts: jest.fn(),
    });

    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={tennisZoneStore}>
            <Courts></Courts>
          </Provider>
        </MemoryRouter>
      );
    });

    test('Then a list should be in the document', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
