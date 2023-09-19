import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './header';

describe('Given the component Footer', () => {
  describe('When, the Footer is rendered', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Header></Header>
        </MemoryRouter>
      );
    });
    test('Then, an banner role should be in the document', () => {
      const element = screen.getByRole('banner');
      expect(element).toBeInTheDocument();
    });
    test('Then, when you click on the menu button', () => {
      const button = screen.getByRole('button');

      fireEvent.click(button);
      const list = screen.getByRole('list');
      const button2 = screen.getByRole('button2');

      expect(list).toBeInTheDocument();
      fireEvent.click(button2);
      expect(list).not.toBeInTheDocument();
    });
  });
});
