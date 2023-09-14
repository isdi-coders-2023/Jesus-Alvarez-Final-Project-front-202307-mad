import { AiFillGithub, AiFillInstagram } from 'react-icons/Ai';
import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-div']}>
        <span className={styles['firstline']}>
          Las mejores pistas de Madrid.
        </span>
        <div className={styles['logos']}>
          <span className={styles['github']}>
            <AiFillGithub />
          </span>
          <span className={styles['instagram']}>
            <AiFillInstagram />
          </span>
        </div>
      </div>
    </footer>
  );
}
