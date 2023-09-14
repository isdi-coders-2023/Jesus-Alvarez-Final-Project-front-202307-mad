import styles from './login.module.scss';

export function Login() {
  return (
    <>
      <div className={styles['main-page']}>
        <form action="" role="form">
          <div className={styles['form-2']}>
            <h2>Bienvenido</h2>
            <div>
              <label htmlFor="">Correo electrónico</label>
            </div>
            <div>
              <input type="email" name="email" required />
            </div>
            <div>
              <label htmlFor="">Contraseña</label>
            </div>
            <div>
              <input type="password" name="password" required />
            </div>
            <div>
              <span className={styles['registerhere']}>
                ¿Aún no eres usuario?
              </span>
              <span className={styles['registerhere']}> Registrate aquí</span>
            </div>
            <button className={styles['button-submit']} type="submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
