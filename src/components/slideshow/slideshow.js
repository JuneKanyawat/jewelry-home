import React, { useState, useEffect } from "react";
import "./slideshow.css";

function SlideShow() {
  const images = [
    "https://media-hosting.imagekit.io//a7901b6a6e1f4fea/Untitled_Artwork%2017.jpg?Expires=1832086611&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nPr4i71KF7E6NJ~HSUr53BfDuX-szfRECUfW1VftoyUw~E7qwGcDMc4GEZ~5hfkv7kGpUMXjy-Cjh8LHVSudRz-AVf4BRsXj38LwVKo-iHpEPmOAFtrepyMW2mgccAxsi2oypiayQYWaboiWm0ZEJyVwEQ6OPK6sMM3r0Wd-r4NalJ0g4gyfFSQQGo20H9M3kLObu-Pk5iY1F3CR84Pd5PCoPW9zW1-PNJk6Uis6h-pZctzqw6maSmoiNeQdN7AvQ0tGgSdiah3dTzsw87N52x~9NRaP3ymMxCKMj2r5bSwaoHT-ghxFE8QTEUCtcPAr3ui0YLKIw5Y0hCK-Xr~nng__",
    "https://media-hosting.imagekit.io//a7901b6a6e1f4fea/Untitled_Artwork%2017.jpg?Expires=1832086611&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nPr4i71KF7E6NJ~HSUr53BfDuX-szfRECUfW1VftoyUw~E7qwGcDMc4GEZ~5hfkv7kGpUMXjy-Cjh8LHVSudRz-AVf4BRsXj38LwVKo-iHpEPmOAFtrepyMW2mgccAxsi2oypiayQYWaboiWm0ZEJyVwEQ6OPK6sMM3r0Wd-r4NalJ0g4gyfFSQQGo20H9M3kLObu-Pk5iY1F3CR84Pd5PCoPW9zW1-PNJk6Uis6h-pZctzqw6maSmoiNeQdN7AvQ0tGgSdiah3dTzsw87N52x~9NRaP3ymMxCKMj2r5bSwaoHT-ghxFE8QTEUCtcPAr3ui0YLKIw5Y0hCK-Xr~nng__",
    "https://media-hosting.imagekit.io//a7901b6a6e1f4fea/Untitled_Artwork%2017.jpg?Expires=1832086611&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nPr4i71KF7E6NJ~HSUr53BfDuX-szfRECUfW1VftoyUw~E7qwGcDMc4GEZ~5hfkv7kGpUMXjy-Cjh8LHVSudRz-AVf4BRsXj38LwVKo-iHpEPmOAFtrepyMW2mgccAxsi2oypiayQYWaboiWm0ZEJyVwEQ6OPK6sMM3r0Wd-r4NalJ0g4gyfFSQQGo20H9M3kLObu-Pk5iY1F3CR84Pd5PCoPW9zW1-PNJk6Uis6h-pZctzqw6maSmoiNeQdN7AvQ0tGgSdiah3dTzsw87N52x~9NRaP3ymMxCKMj2r5bSwaoHT-ghxFE8QTEUCtcPAr3ui0YLKIw5Y0hCK-Xr~nng__",
    "https://media-hosting.imagekit.io//a7901b6a6e1f4fea/Untitled_Artwork%2017.jpg?Expires=1832086611&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nPr4i71KF7E6NJ~HSUr53BfDuX-szfRECUfW1VftoyUw~E7qwGcDMc4GEZ~5hfkv7kGpUMXjy-Cjh8LHVSudRz-AVf4BRsXj38LwVKo-iHpEPmOAFtrepyMW2mgccAxsi2oypiayQYWaboiWm0ZEJyVwEQ6OPK6sMM3r0Wd-r4NalJ0g4gyfFSQQGo20H9M3kLObu-Pk5iY1F3CR84Pd5PCoPW9zW1-PNJk6Uis6h-pZctzqw6maSmoiNeQdN7AvQ0tGgSdiah3dTzsw87N52x~9NRaP3ymMxCKMj2r5bSwaoHT-ghxFE8QTEUCtcPAr3ui0YLKIw5Y0hCK-Xr~nng__",
    "https://media-hosting.imagekit.io//a7901b6a6e1f4fea/Untitled_Artwork%2017.jpg?Expires=1832086611&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nPr4i71KF7E6NJ~HSUr53BfDuX-szfRECUfW1VftoyUw~E7qwGcDMc4GEZ~5hfkv7kGpUMXjy-Cjh8LHVSudRz-AVf4BRsXj38LwVKo-iHpEPmOAFtrepyMW2mgccAxsi2oypiayQYWaboiWm0ZEJyVwEQ6OPK6sMM3r0Wd-r4NalJ0g4gyfFSQQGo20H9M3kLObu-Pk5iY1F3CR84Pd5PCoPW9zW1-PNJk6Uis6h-pZctzqw6maSmoiNeQdN7AvQ0tGgSdiah3dTzsw87N52x~9NRaP3ymMxCKMj2r5bSwaoHT-ghxFE8QTEUCtcPAr3ui0YLKIw5Y0hCK-Xr~nng__",
  ];
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
    <div className="slideshow-section">
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
