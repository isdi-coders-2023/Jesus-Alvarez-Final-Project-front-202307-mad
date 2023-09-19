import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Court as court } from '../../model/court';
import { Court } from './court';
describe('Given the component Court', () => {
  describe('When it is rendered', () => {
    const mockCourt = {
      pictures: {
        url: 'string',
      },
    } as unknown as court;
    render(<Court court={mockCourt}></Court>);
    test('Then an alt text should be in the document', () => {
      const element = screen.getByAltText('A court picture.');
      expect(element).toBeInTheDocument();
    });
  });
});
