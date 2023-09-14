import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given the component Footer', () => {
  describe('When, the Footer is rendered', () => {
    render(<Footer></Footer>);
    test('Then, a headeing should be in the document', () => {
      const element = screen.getByText('Las mejores pistas de Madrid.');
      expect(element).toBeInTheDocument();
    });
  });
});
