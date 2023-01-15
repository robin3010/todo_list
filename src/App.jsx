import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  console.log('Render App');

  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
