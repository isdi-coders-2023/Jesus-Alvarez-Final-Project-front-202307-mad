import { useParams } from 'react-router-dom';
import { useCourts } from '../../hooks/use-courts';
import { Court } from '../../model/court';
import { Review } from '../../model/review';
import { ReviewCard } from '../reviews-card/reviews-card';
import styles from './reviews.module.scss';

export function Reviews() {
  const { courts } = useCourts();

  const { id } = useParams();

  const court = courts.find((court) => court.id === id) as Court;
  const reviews = court.reviews;

  return (
    <div className={styles['reviewdiv']}>
      {reviews.map((item: Review, index: number) => (
        <ReviewCard key={index} review={item} />
      ))}
    </div>
  );
}
