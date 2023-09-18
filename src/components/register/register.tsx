import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';
import styles from './register.module.scss';

export function Register() {
  const { usersRegister } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();

    const formElement = ev.target as HTMLFormElement;
    const formData = new FormData(formElement);

    usersRegister(formData);
    navigate('/login');
  };

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
            <div>
              <label htmlFor="file">File</label>
            </div>
            <div>
              <input name="imageData" id="file" type="file" />
            </div>

            <button className={styles['button-submit']} type="submit">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
