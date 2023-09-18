import { useState } from 'react';

import { IoClose } from 'react-icons/io5';
import styles from './header.module.scss';

export function Header() {
  const [menuState, setMenuState] = useState(false);
  if (menuState === false) {
    return (
      <header>
        <div className={styles['main-header']}>
          <img
            src="/menu-removebg-preview.png"
            alt="A menu logo"
            width="60px"
            height="60px"
            onClick={() => setMenuState(!menuState)}
          />
          <a href="/">
            <img
              src="/tennis_logo.png"
              alt="A tennis ball logo"
              width="60px"
              height="60px"
            />
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
