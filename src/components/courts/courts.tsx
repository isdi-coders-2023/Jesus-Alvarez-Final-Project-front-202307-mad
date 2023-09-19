import { useEffect } from 'react';
import { useCourts } from '../../hooks/use-courts';
import { Court as court } from '../../model/court';
import { CourtCard } from '../court-card/court-card';
import styles from './courts.module.scss';

export function Courts() {
  const { getCourts, courtsState } = useCourts();

  useEffect(() => {
    getCourts();
  }, [getCourts]);

  return (
    <div>
      <h2 className={styles['title']}>Pistas</h2>
      <ul className={styles['ul-courts']}>
        {courtsState.courts.map((item: court, index: number) => (
          <CourtCard key={index} court={item}></CourtCard>
        ))}
      </ul>
    </div>
  );
}
