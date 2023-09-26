import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { tennisZoneStore } from '../../store/store';
import ProfilePage from './profile-page';

describe('Given the page ProfilePage', () => {
  describe('When it is rendered', () => {
    render(
      <MemoryRouter>
        <Provider store={tennisZoneStore}>
          <ProfilePage></ProfilePage>
        </Provider>
      </MemoryRouter>
    );
    test('Then,', () => {
      const altText = screen.getByAltText('The profile picture');
      expect(altText).toBeInTheDocument();
    });
  });
});
