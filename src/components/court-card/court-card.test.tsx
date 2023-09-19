import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Court as court } from '../../model/court';
import { CourtCard } from './court-card';
describe('Given the component Court', () => {
  describe('When it is rendered', () => {
    const mockCourt = {
      pictures: {
        url: 'string',
      },
    } as unknown as court;
    render(<CourtCard court={mockCourt}></CourtCard>);
    test('Then an alt text should be in the document', () => {
      const element = screen.getByAltText('A court picture.');
      expect(element).toBeInTheDocument();
    });
  });
});
