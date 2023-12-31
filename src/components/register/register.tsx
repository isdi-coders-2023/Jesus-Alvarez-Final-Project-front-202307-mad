import { SyntheticEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useUsers } from '../../hooks/use-users';
import styles from './register.module.scss';

export function Register() {
  const { usersRegister, registerStatus } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();

    const formElement = ev.target as HTMLFormElement;
    const formData = new FormData(formElement);

    usersRegister(formData);
  };

  useEffect(() => {
    if (registerStatus === 'loading') return;
    if (registerStatus === 'registered') {
      Swal.fire({
        title: 'Registro Exitoso!',
        width: '20rem',
        padding: '2rem 0',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/login');
    }
    if (registerStatus === 'error') navigate('/error');
  }, [registerStatus, navigate]);

  return (
    <>
      <div className={styles['main-page']}>
        <form onSubmit={handleSubmit} role="form">
          <div className={styles['form-2']}>
            <h2>Crear Cuenta</h2>
            <div>
              <label htmlFor="firstName">Nombre</label>
            </div>
            <div>
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Apellido</label>
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="off"
                required
              />
            </div>
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
            <div className={styles['file-input']}>
              <label htmlFor="file">File</label>
              <input
                className={styles['file']}
                name="imageData"
                id="file"
                type="file"
                required
              />
            </div>

            <div className={styles['button-div']}>
              <button className={styles['button-submit']} type="submit">
                Registrarse
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
