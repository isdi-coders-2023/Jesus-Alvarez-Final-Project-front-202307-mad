import { Court } from '../../model/court';
import styles from './court-card.module.scss';

type Props = {
  court: Court;
};

export function CourtCard({ court }: Props) {
  return (
    <li className={styles['listCharacters']}>
      <img
        className={styles['courtPicture']}
        src={court.pictures.url}
        alt="A court picture."
        width="300px"
      />
      <div>
        <p>{court.name}</p>
      </div>
    </li>
  );
}
