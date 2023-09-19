import { useState } from 'react';
import { BiMenuAltLeft, BiTennisBall } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import styles from './header.module.scss';

export function Header() {
  const [menuState, setMenuState] = useState(false);
  if (menuState === false) {
    return (
      <header>
        <div className={styles['main-header']}>
          <BiMenuAltLeft
            className={styles['main-menu']}
            onClick={() => setMenuState(!menuState)}
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
        <ul className={styles['nav-menu']}>
          <li
            className={styles['cross']}
            onClick={() => setMenuState(!menuState)}
          >
            <IoClose />
          </li>
          <li>
            <a href="/login">Entrar</a>
          </li>
          <li>
            <a href="">Acerca de nosotros</a>
          </li>
          <li>
            <a href="/register">Registro</a>
          </li>
          <li>
            <a href="">Perfil</a>
          </li>
        </ul>
      </div>
    );
  }
}
