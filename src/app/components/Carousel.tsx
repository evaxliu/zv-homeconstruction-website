'use client'
import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Carousel() {
  const images = [
    '/stock1.jpg',
    '/stock2.jpg',
    '/stock3.jpg',
    '/stock4.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden relative h-64">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <Image src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" width={500} height={500}/>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2p-2"
        onClick={prevSlide}
      >
        <ChevronLeft/>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2p-2"
        onClick={nextSlide}
      >
        <ChevronRight/>
      </button>
    </div>
  );
};