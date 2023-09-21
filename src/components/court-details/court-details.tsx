import { Link, useParams } from 'react-router-dom';
import { useCourts } from '../../hooks/use-courts';
import { Court } from '../../model/court';

import { useUsers } from '../../hooks/use-users';
import { ReviewForm } from '../review-form/review-form';
import { Reviews } from '../reviews/reviews';
import styles from './court-details.module.scss';

export function CourtDetails() {
  const { courts } = useCourts();
  const { userId } = useUsers();

  const { id } = useParams();

  const court = courts.find((court) => court.id === id) as Court;

  return (
    <div className={styles['main-div']}>
      <h2>Pistas</h2>

      <div className={styles['info-div']}>
        <img
          className={styles['courtpicture']}
          src={court.pictures.url}
          width="350px"
          alt="A court picture."
        />
        <div className={styles['textdiv']}>
          <p className={styles['name']}>Nombre: {court.name}</p>
          <p>Ubicación: {court.location}</p>
          <p>Superficie: {court.surface}</p>
        </div>
      </div>
      {userId ? <ReviewForm></ReviewForm> : null}

      <Reviews></Reviews>
      <Link
        className={styles['button']}
        role="button"
        id="backbutton"
        to={'/courts'}
      >
        Atrás
      </Link>
    </div>
  );
}
