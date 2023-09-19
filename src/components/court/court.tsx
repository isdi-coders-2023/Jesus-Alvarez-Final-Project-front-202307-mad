import { Court } from '../../model/court';
import styles from './court.module.scss';

type Props = {
  court: Court;
};

export function Court({ court }: Props) {
  return (
    <li className={styles['listCharacters']}>
      <img
        className={styles['courtPicture']}
        src={court.pictures.url}
        alt="A court picture."
      />
      <div>
        <p>{court.name}</p>
      </div>
    </li>
  );
}
