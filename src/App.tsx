import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { AppRouter } from './routes/app-routes';

function App() {
  return (
    <div>
      <Header></Header>
      <AppRouter></AppRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
