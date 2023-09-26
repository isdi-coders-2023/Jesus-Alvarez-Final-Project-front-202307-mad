import styles from './App.module.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { AppRouter } from './routes/app-routes';

function App() {
  return (
    <>
      <Header></Header>
      <div className={styles['main-app-div']}>
        <AppRouter></AppRouter>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
