import React, { useState, useEffect, useCallback, useRef } from 'react';
import './ProjectGallery.css';

const ProjectGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToDot = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const startAutoPlay = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      goToNext();
    }, 5000);
  }, [goToNext]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [startAutoPlay]);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    startAutoPlay();
  }, [currentIndex, startAutoPlay]);

  if (!images || images.length === 0) {
    return <p>No projects to display.</p>;
  }

  return (
    <div className="project-gallery">
      <h2>Our Completed Projects</h2>
      <div className="carousel">
        <button className="carousel-button prev" onClick={goToPrevious}>
          &#10094;
        </button>
        <div className="carousel-slide">
          <img
            src={images[currentIndex]}
            alt={`Project ${currentIndex + 1}`}
            className="carousel-image"
          />
        </div>
        <button className="carousel-button next" onClick={goToNext}>
          &#10095;
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToDot(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;