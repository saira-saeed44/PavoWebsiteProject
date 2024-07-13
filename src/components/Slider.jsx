import React from 'react';
import SliderCard from './SliderCard';
import { sliderData } from '../data'; 

const Slider = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-lg w-full">
        {sliderData.map((slide, index) => (
          <SliderCard key={index} slide={slide} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
