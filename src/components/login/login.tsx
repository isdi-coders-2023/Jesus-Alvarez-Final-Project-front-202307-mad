import styles from './login.module.scss';

export function Login() {
  return (
    <>
      <div className={styles['main-page']}>
        <form action="" role="form">
          <div className={styles['form-2']}>
            <h2>Bienvenido</h2>
            <div>
              <label htmlFor="email">Correo electrónico</label>
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                required
              />
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