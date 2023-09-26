import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { tennisZoneStore } from '../../store/store';
import { Home } from './home';

describe('Given the component Home', () => {
  describe('When its rendered', () => {
    render(
      <MemoryRouter>
        <Provider store={tennisZoneStore}>
          <Home></Home>
        </Provider>
      </MemoryRouter>
    );
    test('Then, a court image should be in the document', () => {
      const element = screen.getByAltText('A court picture');
      expect(element).toBeInTheDocument();
    });
  });
});
