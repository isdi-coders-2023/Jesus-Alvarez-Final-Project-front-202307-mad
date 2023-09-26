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
    <footer role="footer">
      <div className={styles['menu']}>
        <div className={styles['icons']}>
          {userStatus === 'visitor' ? null : (
            <Link to={'/'} onClick={handleLogOut}>
              <span className={styles['logout']}>
                <TbLogout2 />
              </span>
            </Link>
          )}

          <Link to={'/'}>
            <span className={styles['home']}>
              <BiTennisBall />
            </span>
          </Link>

          {userStatus === 'visitor' ? null : (
            <Link to={'/profile'}>
              <span role="button" className={styles['logout']}>
                <RxPerson />
              </span>
            </Link>
          )}

          {userStatus === 'visitor' ? (
            <Link to="/login">
              <span className={styles['login']}>
                <BsFillPersonFill />
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
