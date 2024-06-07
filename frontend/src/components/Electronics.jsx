import React, { useState } from 'react';

export function Electronics() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const items = [
    { src: '../src/assets/images/one.webp', alt: 'Wireless Headphone 1' },
    { src: '../src/assets/images/two.webp', alt: 'Wireless Headphone 2' },
    { src: '../src/assets/images/three.webp', alt: 'Wireless Headphone 3' },
    { src: '../src/assets/images/four.webp', alt: 'Wireless Headphone 4' },
    { src: '../src/assets/images/five.webp', alt: 'Wireless Headphone 5' },
    { src: '../src/assets/images/six.webp', alt: 'Wireless Headphone 6' },
    { src: '../src/assets/images/seven.webp', alt: 'Wireless Headphone 7' },
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

      <div className="text-3xl font-bold m-3 text-gray-800">
        Best of Electronics
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
            <div key={index} className="border-2 h-72 w-64 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src={item.src}
                alt={item.alt}
                className="h-40 w-40 object-contain rounded-md mb-2"
              />
              <div className="text-center text-lg font-medium text-gray-700 mb-1">
                Best Wireless Headphones
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
