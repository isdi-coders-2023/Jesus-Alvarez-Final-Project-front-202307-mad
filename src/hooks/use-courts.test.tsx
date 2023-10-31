import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider, useDispatch } from 'react-redux';

import { tennisZoneStore } from '../store/store';
import { useCourts } from './use-courts';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

jest.mock('../config', () => ({
  localUrl: '',
}));

describe('Given the custom hook useCourts()', () => {
  function TestComponent() {
    const { getCourts } = useCourts();

    return (
      <>
        <button role="button" onClick={() => getCourts()}></button>
      </>
    );
  }
  describe('When, the TestComponent run the hook', () => {
    beforeEach(() => {
      render(
        <Provider store={tennisZoneStore}>
          <TestComponent></TestComponent>
        </Provider>
      );
    });

    test('Then, when we click on the button, the courts should be rendered', async () => {
      const button = screen.getByRole('button');
      await userEvent.click(button);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
