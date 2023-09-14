import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given the component Footer', () => {
  describe('When, the Footer is rendered', () => {
    render(<Header></Header>);
    test('Then, an alt text should be in the document', () => {
      const element = screen.getByAltText('A tennis ball logo');
      expect(element).toBeInTheDocument();
    });
  });
});
