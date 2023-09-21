import { useState } from 'react';
import { BiMenuAltLeft, BiTennisBall } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { useUsers } from '../../hooks/use-users';
import styles from './header.module.scss';

export function Header() {
  const [menuState, setMenuState] = useState(false);
  const { userId, usersLogout } = useUsers();

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

          <a href="/" className={styles['tennisball']}>
            <BiTennisBall />
          </a>
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
          <li>{!userId ? <a href="/login">Entrar</a> : null}</li>

          <li>
            <a href="/register">Registro</a>
          </li>
          <li>
            <a href="">Perfil</a>
          </li>

          {userId ? (
            <li>
              <a onClick={handleLogOut}>Salir</a>
            </li>
          ) : null}
        </ul>
      </div>
    );
  }
}
