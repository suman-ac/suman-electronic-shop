import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import Payments from './components/Payments';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/cart/:id' element={<CardsDetails />} />
        <Route path='/payments' element={<Payments />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
