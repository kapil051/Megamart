import React, { useState, useEffect } from 'react';

export function Mid3() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "../src/assets/images/mid2.1.webp",
        "../src/assets/images/mid2.2.webp",
        "../src/assets/images/mid2.3.webp",
        "../src/assets/images/mid2.4.webp",
        "../src/assets/images/mid2.5.webp",
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 3000); // Auto move every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className=" relative h-56 m-2 shadow-lg bg-white overflow-hidden">
           
            <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <img
                        key={index}
                        className="h-full  object-cover flex-shrink-0"
                        src={src}
                        alt={`Slide ${index}`}
                    />
                ))}
            </div>
            
            <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &#8592;
            </button>
            
            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &#8594;
            </button>
        </div>
    );
}
