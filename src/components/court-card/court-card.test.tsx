import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { Court as court } from '../../model/court';
import { tennisZoneStore } from '../../store/store';
import { CourtCard } from './court-card';

describe('Given the component Court', () => {
  describe('When it is rendered', () => {
    const mockCourt = {
      pictures: {
        url: 'string',
      },
    } as unknown as court;
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={tennisZoneStore}>
            <CourtCard court={mockCourt}></CourtCard>
          </Provider>
        </MemoryRouter>
      );
    });

    test('Then an alt text should be in the document', () => {
      const element = screen.getByAltText('A court picture.');
      expect(element).toBeInTheDocument();
    });
  });
});
