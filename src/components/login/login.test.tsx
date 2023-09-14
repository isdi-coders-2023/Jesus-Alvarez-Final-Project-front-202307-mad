import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Login } from './login';

describe('Given the component Login', () => {
  describe('When it is rendered', () => {
    render(<Login></Login>);
    test('Then, it should render a button', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
