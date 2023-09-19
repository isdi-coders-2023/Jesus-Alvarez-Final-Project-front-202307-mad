import { SyntheticEvent } from 'react';
import { useUsers } from '../../hooks/use-users';
import { UserLoginData } from '../../model/user';
import styles from './login.module.scss';

export function Login() {
  const { usersLogin } = useUsers();

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formElement = ev.currentTarget as HTMLFormElement;
    const userLogin: UserLoginData = {
      email: (formElement.elements.namedItem('email') as HTMLFormElement).value,
      password: (formElement.elements.namedItem('password') as HTMLFormElement)
        .value,
    };
    usersLogin(userLogin);
  };

  return (
    <>
      <div className={styles['main-page']}>
        <form onSubmit={handleSubmit} role="form">
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
            <div className={styles['register']}>
              <span className={styles['registerhere']}>
                ¿Aún no eres usuario?
              </span>
              <span className={styles['registerhere']}>
                <a href="/register">Registrate aquí</a>
              </span>
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
