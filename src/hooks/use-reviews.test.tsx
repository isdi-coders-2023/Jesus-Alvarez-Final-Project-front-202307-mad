import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider, useDispatch } from 'react-redux';
import { Review } from '../model/review';
import { tennisZoneStore } from '../store/store';
import { useReviews } from './use-reviews';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

jest.mock('../config', () => ({
  localUrl: '',
}));

describe('Given the hook useReviews()', () => {
  function TestComponent() {
    const {
      getReviews,
      createReviews,
      deleteReviews,
      getByIdReview,
      updateReview,
      reviewsStateReset,
    } = useReviews();

    const mockReview = {} as unknown as FormData;
    const mockReview2 = {} as unknown as Review;

    return (
      <>
        <button role="button" onClick={() => getReviews()}>
          1
        </button>
        <button role="button" onClick={() => createReviews(mockReview)}>
          2
        </button>
        <button role="button" onClick={() => deleteReviews(mockReview2)}>
          3
        </button>
        <button role="button" onClick={() => getByIdReview(mockReview2)}>
          4
        </button>
        <button role="button" onClick={() => updateReview('', mockReview)}>
          5
        </button>
        <button role="button" onClick={() => reviewsStateReset()}>
          6
        </button>
      </>
    );
  }
  describe('When the TestComponent run the hook', () => {
    beforeEach(() => {
      render(
        <Provider store={tennisZoneStore}>
          <TestComponent></TestComponent>
        </Provider>
      );
    });
    test('Then if we click on 1, the state shouldve changed', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[0]);
      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then if we click on 2, the state shouldve changed', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[1]);
      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then if we click on 3, the state shouldve changed', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[2]);
      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then if we click on 4, the state shouldve changed', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[3]);
      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then if we click on 5, the state shouldve changed', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[4]);
      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then if we click on 6, the state shouldve changed', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[5]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
