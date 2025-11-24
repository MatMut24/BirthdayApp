import React from 'react';

const Slide = ({ slide }) => {
  switch(slide.type) {
    case 'text':
      return <div className="slide-text">{slide.content}</div>;
    case 'image':
      return (
        <div className="slide-image">
          <img src={slide.src} alt={slide.caption} />
          {slide.caption && <p>{slide.caption}</p>}
        </div>
      );
    case 'gif':
      return (
        <div className="slide-gif">
          <img src={slide.src} alt={slide.caption} />
          {slide.caption && <p>{slide.caption}</p>}
        </div>
      );
    default:
      return null;
  }
};

export default Slide;
