import React, { useState } from 'react';
import slides from './slides';
import Slide from './Slide';
import './index.css';

function App() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div className="app">
      <Slide slide={slides[current]} />
      <div className="navigation">
        <button onClick={prevSlide} disabled={current === 0}>Indietro</button>
        <button onClick={nextSlide} disabled={current === slides.length - 1}>Avanti</button>
      </div>
    </div>
  );
}

export default App;
