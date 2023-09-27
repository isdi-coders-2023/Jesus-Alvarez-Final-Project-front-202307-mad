import { SyntheticEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useUsers } from '../../hooks/use-users';
import { UserLoginData } from '../../model/user';
import styles from './login.module.scss';

export function Login() {
  const { usersLogin, userStatus } = useUsers();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (userStatus === 'visitor') return;
    if (userStatus === 'logged') {
      Swal.fire({
        title: 'Bienvenido',
        width: '20rem',
        padding: '2rem 0',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/');
    }
  }, [userStatus, navigate]);
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
                <Link to="/register">Registrate aquí</Link>
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
