import { SyntheticEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useReviews } from '../../hooks/use-reviews';
import styles from './edit-review.module.scss';

export function EditReview() {
  const { searchedReview, updateReview, reviewsStatus } = useReviews();
  const review = searchedReview;
  const reviewId = review?.id;
  const navigate = useNavigate();
  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();

    const formElement = ev.target as HTMLFormElement;
    const formData = new FormData(formElement);

    updateReview(reviewId!, formData);
  };

  useEffect(() => {
    if (reviewsStatus === 'loading') return;
    if (reviewsStatus === 'updated') {
      Swal.fire({
        title: '¡Reseña actualizada!',
        width: '20rem',
        padding: '2rem 0',
        showConfirmButton: false,
        timer: 1500,
      });

      navigate('/courts');
    }
    if (reviewsStatus === 'error') navigate('/error');
  }, [reviewsStatus, navigate]);
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
                className={styles['text-area']}
              />
            </div>
            <div className={styles['file-input']}>
              <label htmlFor="file">File</label>
              <input
                className={styles['file']}
                name="image"
                id="file"
                type="file"
              />
            </div>
          </div>

          <button className={styles['button-submit1']} type="submit">
            Enviar
          </button>
        </form>
        <Link
          className={styles['button-submit']}
          role="button"
          id="backbutton"
          to={'/courts'}
        >
          Atras
        </Link>
      </div>
    </>
  );
}
