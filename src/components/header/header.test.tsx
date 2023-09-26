import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { useUsers } from '../../hooks/use-users';
import { tennisZoneStore } from '../../store/store';
import { Header } from './header';

jest.mock('../../hooks/use-users');

describe('Given the component Footer', () => {
  describe('When, the Header is rendered', () => {
    (useUsers as jest.Mock).mockReturnValue({
      userStatus: 'logged',
      user: { imageData: { url: 'k' } },
    });
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={tennisZoneStore}>
            <Header></Header>
          </Provider>
        </MemoryRouter>
      );
    });
    test('Then, an banner role should be in the document', () => {
      const element = screen.getByRole('banner');
      expect(element).toBeInTheDocument();
    });
  });
});
