import React, { useState } from 'react';

export function Sports() {

  const [scrollPosition, setScrollPosition] = useState(0);

  const items = [
    { src: '../src/assets/images/batMan.webp', alt: 'Best of Action Toys' },
    { src: '../src/assets/images/car.webp', alt: 'Remote Control Toys' },
    { src: '../src/assets/images/drawing.webp', alt: 'Learning Education Games' },
    { src: '../src/assets/images/dryFruits.webp', alt: 'Dry Fruits' },
    { src: '../src/assets/images/guitar.webp', alt: 'Remote Guitar' },
    { src: '../src/assets/images/gym.webp', alt: 'Gym Essentials' },
    { src: '../src/assets/images/pen.webp', alt: 'Top Selling Stationary' },
  ];

  const scrollRight = () => {
    if (scrollPosition < items.length - 1) {
      setScrollPosition(scrollPosition + 1);
    }
  };

  const scrollLeft = () => {
    if (scrollPosition > 0) {
      setScrollPosition(scrollPosition - 1);
    }
  };

  return (
    <div className="bg-white shadow-lg m-4 p-4 rounded-lg">

      <div className="text-2xl font-medium m-3 text-gray-800">
        Beuty,Food,Toys & More
      </div>

      <div className="relative flex items-center justify-center">
        <button 
          className="absolute left-0 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          onClick={scrollLeft}
        >
          &lt;
        </button>

        <div className="flex gap-8 justify-center flex-wrap overflow-hidden w-full">
          {items.slice(scrollPosition, scrollPosition + 4).map((item, index) => (
            <div key={index} className="border-2 h-64 w-64 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src={item.src}
                alt={item.alt}
                className="h-36 w-36 object-contain rounded-md mb-2"
              />
              <div className="text-center text-lg font-medium text-gray-700 mb-1">
                 {item.alt}
              </div>
              <div className="text-center text-sm text-blue-600 font-semibold">
                Grab Now
              </div>
            </div>
          ))}
        </div>

        <button 
          className="absolute right-0 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
