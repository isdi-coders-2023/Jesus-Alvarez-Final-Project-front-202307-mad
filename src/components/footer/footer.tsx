import { BiTennisBall } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { RxPerson } from 'react-icons/rx';
import { TbLogout2 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useUsers } from '../../hooks/use-users';
import styles from './footer.module.scss';

export function Footer() {
  const { userStatus, usersLogout } = useUsers();

  const handleLogOut = () => {
    usersLogout();
    return;
  };

  return (
    <footer role="navigation">
      <div className={styles['menu']}>
        <div className={styles['icons']}>
          {userStatus === 'visitor' ? null : (
            <Link to={'/'} onClick={handleLogOut}>
              <span className={styles['logout']}>
                <TbLogout2 aria-label="Logout button" />
              </span>
            </Link>
          )}

          <Link to="/courts">
            <span role="link" className={styles['home']}>
              <BiTennisBall aria-label="Home button" role="button" />
            </span>
          </Link>

          {userStatus === 'visitor' ? null : (
            <Link to={'/profile'}>
              <span role="button" className={styles['logout']}>
                <RxPerson aria-label="Profile button" />
              </span>
            </Link>
          )}

          {userStatus === 'visitor' ? (
            <Link to="/login">
              <span role="link" className={styles['login']}>
                <BsFillPersonFill role="button" aria-label="Login button" />
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
