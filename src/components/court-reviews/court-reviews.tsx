import { Link, useParams } from 'react-router-dom';
import { useCourts } from '../../hooks/use-courts';
import { Court } from '../../model/court';

export function CourtDetails() {
  const { courtsState } = useCourts();

  const { id } = useParams();

  const court = courtsState.courts.find((court) => court.id === id) as Court;

  return (
    <div>
      <p>{court.name}</p>
      <img src={court.pictures.url} width="350px" alt="A court picture." />
      <div>
        <p>Ubicación: {court.location}</p>
        <p>Superficie: {court.surface}</p>
      </div>
      <Link role="button" id="backbutton" to={'/courts'}>
        Atrás
      </Link>
    </div>
  );
}
