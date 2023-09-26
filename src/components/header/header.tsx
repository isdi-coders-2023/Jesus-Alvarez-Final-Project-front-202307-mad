import { useUsers } from '../../hooks/use-users';
import styles from './header.module.scss';
export function Header() {
  const { user, userStatus } = useUsers();

  return (
    <header>
      <div className={styles['main-header']}>
        <div>
          {userStatus === 'visitor' ? null : <p> Hola {user?.firstName}!</p>}
        </div>
        <div>
          {userStatus === 'visitor' ? (
            <div className={styles['square']}></div>
          ) : (
            <img
              className={styles['profile']}
              width="10px"
              src={user?.imageData.url}
            />
          )}
        </div>
      </div>
    </header>
  );
}
