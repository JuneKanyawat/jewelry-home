import React, { useState, useEffect } from "react";
import "./slideshow.css";

import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";

function SlideShow() {
  const images = [image1, image2, image3, image4, image5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="slideshow-container">
      <div
        className="image-wrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <div className="slideshow-control">
        <button className="slideshow-btn" onClick={handlePrev}>
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <div className="dots-container">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active-dot" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
        <button className="slideshow-btn" onClick={handleNext}>
          <i class="fa-solid fa-angle-right"></i>
        </button>
        <button className="slideshow-btn" onClick={togglePlay}>
          {isPlaying ? (
            <i class="fa-solid fa-stop"></i>
          ) : (
            <i class="fa-solid fa-play"></i>
          )}
        </button>
      </div>
    </div>
  );
}

export default SlideShow;
