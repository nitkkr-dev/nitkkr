import Image from 'next/image';
import { useState } from 'react';
import styles from './Slideshow.module.css';

export default function Slideshow() {
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
    <div className={styles.slideshowContainer}>
      {slides.map((slide: string, index: number) => (
        <div className={index === currentSlide ? 'mySlides' :'mySlides hidden' } key={index}>
          <Image
            src={slide}
            alt={"slides ${index + 1}"}
            width={1920}
            height={1080}
            loading={index === 0 ? 'eager' : 'lazy'} 
          />
        </div>
      ))}
      <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
      <button className={styles.next} onClick={nextSlide}>&#10095;</button>
    </div>
  );
};






           