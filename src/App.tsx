import styles from './app.module.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Login } from './components/login/login';

function App() {
  return (
    <div className={styles['main-page']}>
      <Header></Header>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
}

export default App;
