import styles from './home.module.scss';

export function Home() {
  return (
    <div className={styles['main-div']}>
      <img
        src="./public/tenniz zone.png"
        alt="The tennis zone logo."
        width="300"
        height="81.87"
      ></img>
      <img
        className={styles['courtpic']}
        src="./public/guilherme-maggieri-OH5g9IgcMWs-unsplash.jpg"
        alt="A court picture"
        width="300px"
        height="364px"
      ></img>
      <img
        src="./public/madrid.png"
        alt="A Madrid word"
        width="175px"
        height="60px"
      ></img>
      <button className={styles['button']}>Reseñas</button>
    </div>
  );
}
