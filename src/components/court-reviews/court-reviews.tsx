import { Link, useParams } from 'react-router-dom';
import { useCourts } from '../../hooks/use-courts';
import { Court } from '../../model/court';
import styles from './court-reviews.module.scss';

export function CourtReviews() {
  const { courtsState } = useCourts();

  const { id } = useParams();

  const court = courtsState.courts.find((court) => court.id === id) as Court;

  return (
    <div className={styles['main-div']}>
      <h2>Pistas</h2>

      <img src={court.pictures.url} width="350px" alt="A court picture." />
      <p>{court.name}</p>
      <div className={styles['info-div']}>
        <p>Ubicación: {court.location}</p>
        <p>Superficie: {court.surface}</p>
      </div>
      <Link role="button" id="backbutton" to={'/courts'}>
        Atrás
      </Link>
    </div>
  );
}
