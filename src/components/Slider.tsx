import React, { useState, useEffect } from 'react';
import './Slider.css'; // Estilos específicos para el slider
const images = [
  '/imagen1.jpg', // Agrega tus imágenes aquí (colócalas en public/)
  '/imagen2.jpg',
  '/imagen3.jpg',
];
const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="slider">
      <div className="slider-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} className="slider-image" />
        ))}
      </div>
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
              </div>
    </div>
  );
};
export default Slider;