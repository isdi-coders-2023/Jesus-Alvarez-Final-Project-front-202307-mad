import { useReviews } from '../../hooks/use-reviews';
import { useUsers } from '../../hooks/use-users';
import { Review } from '../../model/review';
import { ReviewCard } from '../reviews-card/reviews-card';
import styles from './profile.module.scss';

export function Profile() {
  const { user } = useUsers();
  const { reviews } = useReviews();
  console.log(reviews);
  const userReviews = reviews.filter((item) => item.userId.id === user?.id);
  console.log(userReviews);

  return (
    <div className={styles['profile-main']}>
      <div>
        <div className={styles['profile-picture-div']}>
          <img
            className={styles['profile-picture']}
            width="300px"
            src={user?.imageData.url}
            alt="The profile picture"
          />
        </div>
      </div>
      <div>
        <p className={styles['user-name']}>
          {user?.firstName} {user?.lastName}
        </p>
      </div>

      <div className={styles['review-cards']}>
        {userReviews!.map((item: Review, index: number) => (
          <ReviewCard key={index} review={item} />
        ))}
      </div>
    </div>
  );
}
