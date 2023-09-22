import { Link } from 'react-router-dom';

export function Error() {
  return (
    <>
      <div>
        <h2>Lo sentimos, ha ocurrido un error.</h2>
        <Link rel="stylesheet" to="./">
          Regresar
        </Link>
      </div>
    </>
  );
}
