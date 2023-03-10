import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="container d-flex flex-column vh-100">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
