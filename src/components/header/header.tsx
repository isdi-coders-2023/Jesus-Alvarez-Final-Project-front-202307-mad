import styles from './header.module.scss';

export function Header() {
  return (
    <header>
      <div className={styles['main-header']}>
        <img
          src="/menu-removebg-preview.png"
          alt="A menu logo"
          width="60px"
          height="60px"
        ></img>
        <img
          src="/tennis_logo.png"
          alt="A tennis ball logo"
          width="60px"
          height="60px"
        />
      </div>
    </header>
  );
}
