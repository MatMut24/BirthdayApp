import React, { useState } from 'react';
import slides from './slides';
import Slide from './Slide';
import './index.css';

import { useEffect } from 'react';


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
      <div className="slider" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((s, i) => (
          <div className="slide-wrapper" key={i}>
            <Slide slide={s} />
          </div>
        ))}
      </div>


      <div className="navigation">
        <button onClick={prevSlide} hidden={current === 0 || current === slides.length - 1}>Indietro</button>
        <button onClick={nextSlide} hidden={current === slides.length - 1}>Avanti</button>
      </div>
    </div>
  );
}

export default App;
