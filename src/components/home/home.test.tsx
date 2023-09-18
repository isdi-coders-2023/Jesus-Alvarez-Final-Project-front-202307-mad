import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Home } from './home';

describe('Given the component Home', () => {
  describe('When its rendered', () => {
    render(<Home></Home>);
    test('Then, a court image should be in the document', () => {
      const element = screen.getByAltText('A court picture');
      expect(element).toBeInTheDocument();
    });
  });
});
