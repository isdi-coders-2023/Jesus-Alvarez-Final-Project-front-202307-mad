import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCourts } from '../../hooks/use-courts';
import { useReviews } from '../../hooks/use-reviews';
import { Court } from '../../model/court';
import { Review } from '../../model/review';
import { ReviewCard } from '../reviews-card/reviews-card';
import styles from './reviews.module.scss';

export function Reviews() {
  const { courts } = useCourts();
  const { getReviews, reviews } = useReviews();
  const { id } = useParams();

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  const specificCourt = courts.find((court) => court.id === id) as Court;
  const courtReviews = reviews.filter(
    (review) => review.courtId === specificCourt.id
  );

  console.log(specificCourt);
  console.log(courtReviews);
  return (
    <div className={styles['reviewdiv']}>
      {courtReviews.map((item: Review, index: number) => (
        <ReviewCard key={index} review={item} />
      ))}
    </div>
  );
}
