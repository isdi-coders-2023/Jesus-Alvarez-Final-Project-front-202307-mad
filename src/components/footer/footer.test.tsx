import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { useUsers } from '../../hooks/use-users';
import { tennisZoneStore } from '../../store/store';
import { Footer } from './footer';

jest.mock('../../hooks/use-users');

describe('Given the component Footer', () => {
  describe('When, the Footer is rendered', () => {
    (useUsers as jest.Mock).mockReturnValue({
      userStatus: 'logged',

      usersLogout: jest.fn(),
    });

    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={tennisZoneStore}>
            <Footer></Footer>
          </Provider>
        </MemoryRouter>
      );
    });
    test('Then, a slogan should be in the document', () => {
      const element = screen.getByRole('footer');
      expect(element).toBeInTheDocument();
    });
  });
});
