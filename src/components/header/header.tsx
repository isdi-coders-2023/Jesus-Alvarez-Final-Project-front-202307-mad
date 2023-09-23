import { useState } from 'react';
import { BiMenuAltLeft, BiTennisBall } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useUsers } from '../../hooks/use-users';
import styles from './header.module.scss';

export function Header() {
  const [menuState, setMenuState] = useState(false);
  const { userStatus, usersLogout } = useUsers();

  const handleLogOut = () => {
    usersLogout();
    return;
  };

  if (menuState === false) {
    return (
      <header>
        <div className={styles['main-header']}>
          <BiMenuAltLeft
            className={styles['main-menu']}
            onClick={() => setMenuState(!menuState)}
            role="button"
          />

          <Link to="/" className={styles['tennisball']}>
            <BiTennisBall />
          </Link>
        </div>
      </header>
    );
  } else {
    return (
      <div className={styles['nav-div']}>
        <ul role="list" className={styles['nav-menu']}>
          <li
            className={styles['cross']}
            onClick={() => setMenuState(!menuState)}
            role="button2"
          >
            <IoClose />
          </li>
          <li>
            {userStatus === 'visitor' ? <Link to="/login">Entrar</Link> : null}
          </li>

          {userStatus === 'logged' ? null : (
            <li>
              <Link to="/register">Registro</Link>
            </li>
          )}
          {userStatus === 'logged' ? (
            <li>
              <Link to="">Perfil</Link>
            </li>
          ) : null}

          {userStatus === 'logged' ? (
            <li>
              <Link to="/" onClick={handleLogOut}>
                Salir
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    );
  }
}
