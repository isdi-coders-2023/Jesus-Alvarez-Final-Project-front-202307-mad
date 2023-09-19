import styles from './home.module.scss';

export function Home() {
  return (
    <div className={styles['main-div']}>
      <p className={styles['Tenniszone']}>Tennis Zone</p>
      <img
        className={styles['courtpic']}
        src="./public/guilherme-maggieri-OH5g9IgcMWs-unsplash.jpg"
        alt="A court picture"
        width="300px"
        height="364px"
      ></img>
      <p className={styles['Madrid']}>Madrid</p>
      <button className={styles['button']}>Pistas</button>
    </div>
  );
}
