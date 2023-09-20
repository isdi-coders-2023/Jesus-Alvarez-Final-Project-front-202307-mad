import { SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useCourts } from '../../hooks/use-courts';
import { useReviews } from '../../hooks/use-reviews';
import { useUsers } from '../../hooks/use-users';
import { Court } from '../../model/court';
import styles from './review-form.module.scss';

export function ReviewForm() {
  const { user } = useUsers();
  const { courts } = useCourts();
  const { createReviews } = useReviews();
  const userid = String(user);

  const { id } = useParams();
  const court = courts.find((court) => court.id === id) as Court;

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();

    const formElement = ev.target as HTMLFormElement;
    const formData = new FormData(formElement);
    createReviews(formData);
  };

  return (
    <>
      <h1>HOLA</h1>
      <div className={styles['main-page']}>
        <form onSubmit={handleSubmit} role="form">
          <div className={styles['form-2']}>
            <h2>¿Jugaste aquí?</h2>
            <h3>Deja una reseña</h3>
            <div>
              <label htmlFor="description"></label>
            </div>
            <div>
              <input
                type="text"
                name="description"
                id="description"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="file">File</label>
            </div>
            <div>
              <input name="imageData" id="file" type="file" />
            </div>
            <div></div>
            <div className={styles['displaynone']}>
              <label htmlFor="userId">userId</label>
            </div>
            <div>
              <input
                value={userid}
                type="text"
                name="userId"
                id="userId"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="courtId">courtId</label>
            </div>
            <div>
              <input
                value={court.id}
                type="text"
                name="courtId"
                id="courtId"
                autoComplete="off"
                required
              />
            </div>
          </div>

          <button className={styles['button-submit']} type="submit">
            Registrarse
          </button>
        </form>
      </div>
    </>
  );
}