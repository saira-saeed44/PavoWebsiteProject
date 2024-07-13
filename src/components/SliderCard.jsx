
import React from 'react';

const SliderCard = ({ slide }) => {
  return (
    <div className="relative">
      <img src={slide.image} alt="Slide" className="w-full h-auto" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
        <p className="text-lg mb-2">{slide.paragraph}</p>
        <h3 className="text-sm font-semibold">{slide.heading1}</h3>
        <p className="text-xs">{slide.heading2}</p>
      </div>
    </div>
  );
};

export default SliderCard;
