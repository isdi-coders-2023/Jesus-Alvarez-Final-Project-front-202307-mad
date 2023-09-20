import { Review } from '../../model/review';
import styles from './reviews-card.module.scss';

type Props = {
  review: Review;
};

export function ReviewCard({ review }: Props) {
  return (
    <div className={styles['main-div']}>
      <span>
        Autor: {review.userId.firstName} {review.userId.lastName}
      </span>
      <span>Reseña: {review.description}</span>
      <span>Foto:</span>
      <img width="300px" src={review.image.url} />
    </div>
  );
}
