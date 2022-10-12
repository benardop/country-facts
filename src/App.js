import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import scrollUp from './assets/images/scrollup.svg';

function App() {
  const [arrowCalss, setArrowClass] = useState('hide');
  const scroll = () => {
    const distanceFromTop = window.scrollY;
    if (distanceFromTop > 0) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setArrowClass('scroll-up');
      } else {
        setArrowClass('hide');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="App" data-testid="app-container">
      <button type="submit" onClick={scroll} className="btn">
        <img src={scrollUp} alt="scroll-up" className={arrowCalss} />
      </button>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>

    </div>
  );
}

export default App;
