import Image from 'next/image';
import { useState } from 'react';
export default function Slideshow (){
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: string[] = [
    'https://nitkkr.ac.in/wp-content/uploads/2023/11/IMG20220903190255-1-scaled.jpg',
    'https://nitkkr.ac.in/wp-content/uploads/2022/01/24131961_285405678647849_426967072086000359_o.jpg',
  ];

  const prevSlide = (): void => {
    setCurrentSlide((prev: number) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = (): void => {
    setCurrentSlide((prev: number) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <button className="prev absolute top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 hover:opacity-100" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next absolute top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 right-0 hover:opacity-100" onClick={nextSlide}>
        &#10095;
      </button>
      {slides.map((slide: string, index: number) => (
        <div className={index === currentSlide ? 'mySlides' :'mySlides hidden' } key={index}>
          <Image
            src={slide}
            alt={`slides ${index + 1}`}
            width={1920}
            height={1080}
            loading={index === 0 ? 'eager' : 'lazy'} 
          />
        </div>
      ))}
    </div>
  );
};