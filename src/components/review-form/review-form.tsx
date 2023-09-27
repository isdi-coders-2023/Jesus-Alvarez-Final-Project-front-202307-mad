import { SyntheticEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useCourts } from '../../hooks/use-courts';
import { useReviews } from '../../hooks/use-reviews';
import { useUsers } from '../../hooks/use-users';
import { Court } from '../../model/court';
import styles from './review-form.module.scss';

export function ReviewForm() {
  const { userId } = useUsers();
  const { courts } = useCourts();
  const { createReviews, reviewsStatus } = useReviews();

  const { id } = useParams();
  const court = courts.find((court) => court.id === id) as Court;

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();

    const formElement = ev.target as HTMLFormElement;
    const formData = new FormData(formElement);
    createReviews(formData);
  };

  useEffect(() => {
    if (reviewsStatus === '') return;
    if (reviewsStatus === 'created') {
      Swal.fire({
        width: '20rem',

        title: '',
        text: '¡Gracias por tu reseña!',
        background: 'white',
        color: '3c638e',
        iconColor: 'green',
        showConfirmButton: false,
        padding: '2rem 0',
        timer: 2000,
      });
    }
    if (reviewsStatus === 'error') {
      Swal.fire({
        width: '20rem',

        text: '¡Error al dejar la reseña!',
        background: 'white',
        color: '#EA4335',

        showConfirmButton: false,
        padding: '2rem 0',
        timer: 2000,
      });
    }
  }, [reviewsStatus]);

  return (
    <>
      <div className={styles['main-page']}>
        <form
          className={styles['main-page-form']}
          onSubmit={handleSubmit}
          role="form"
        >
          <div className={styles['form-2']}>
            <h3 className={styles['h3']}>¿Jugaste aquí?</h3>
            <h3 className={styles['h3']}>Deja una reseña</h3>
            <div>
              <label htmlFor="description"></label>
            </div>
            <div>
              <textarea
                className={styles['text-area']}
                name="description"
                id="description"
                autoComplete="off"
                required
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

            <div className={styles['displaynone']}>
              <label htmlFor="userId">userId</label>
            </div>
            <div className={styles['displaynone']}>
              <input
                value={userId}
                type="text"
                name="userId"
                id="userId"
                autoComplete="off"
                required
                readOnly
              />
            </div>
            <div className={styles['displaynone']}>
              <label htmlFor="courtId">courtId</label>
            </div>
            <div className={styles['displaynone']}>
              <input
                value={court.id}
                type="text"
                name="courtId"
                id="courtId"
                autoComplete="off"
                readOnly
                required
              />
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
