import { useReviews } from '../../hooks/use-reviews';
import { Review } from '../../model/review';
import styles from './reviews-card.module.scss';

type Props = {
  review: Review;
};

export function ReviewCard({ review }: Props) {
  const { deleteReviews } = useReviews();
  const onClick = () => {
    deleteReviews(review);
    console.log(review);
  };

  return (
    <div className={styles['main-div']}>
      <span>
        Autor: {review.userId.firstName} {review.userId.lastName}
      </span>
      <span>Reseña: {review.description}</span>
      <span>Foto:</span>
      <img width="300px" src={review.image.url} />
      <span role="button" onClick={onClick}>
        Borrar reseña X
      </span>
    </div>
  );
}
