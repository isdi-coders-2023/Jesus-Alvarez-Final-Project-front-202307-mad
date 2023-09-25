import { SyntheticEvent } from 'react';
import { useReviews } from '../../hooks/use-reviews';
import styles from './edit-review.module.scss';

export function EditReview() {
  const { searchedReview, updateReview } = useReviews();
  const review = searchedReview;
  const reviewId = review?.id;
  console.log(review);
  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();

    const formElement = ev.target as HTMLFormElement;
    const formData = new FormData(formElement);

    updateReview(reviewId!, formData);
  };

  return (
    <>
      <div className={styles['main-page']}>
        <form onSubmit={handleSubmit} role="form">
          <div className={styles['form-2']}>
            <div>
              <label htmlFor="description"></label>
            </div>
            <div>
              <textarea
                name="description"
                id="description"
                autoComplete="on"
                defaultValue={searchedReview?.description}
                required
              />
            </div>
            <div>
              <label htmlFor="file">File</label>
            </div>
            <div>
              <input name="image" id="file" type="file" />
            </div>
          </div>

          <button className={styles['button-submit']} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
