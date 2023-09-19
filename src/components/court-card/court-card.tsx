import { Link } from 'react-router-dom';
import { Court } from '../../model/court';
import styles from './court-card.module.scss';

type Props = {
  court: Court;
};

export function CourtCard({ court }: Props) {
  return (
    <li className={styles['courtlist']}>
      <Link className={styles['link']} to={`/courts/${court.id}`}>
        <img
          className={styles['courtpicture']}
          src={court.pictures.url}
          alt="A court picture."
          width="300px"
        />
        <div>
          <p className={styles['courtname']}>{court.name}</p>
        </div>
      </Link>
    </li>
  );
}
