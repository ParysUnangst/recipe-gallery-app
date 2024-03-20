import React, { useState } from 'react';
import { images } from './imageList'; // Importing the predefined list of recipe images

function RecipeGallery() {
  const [currentIndex, setCurrentIndex] = useState(0); // State to manage the current index of the displayed image

  // Function to handle navigation to the next image
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  // Function to handle navigation to the previous image
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <div className="gallery-container">
      <div className="image-container">
        <img src={images[currentIndex].url} alt={images[currentIndex].description} />
      </div>
      <div className="description">
        <p>{images[currentIndex].description}</p>
      </div>
      <div className="navigation">
        <button onClick={prevImage} disabled={currentIndex === 0}>Previous</button>
        <button onClick={nextImage} disabled={currentIndex === images.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default RecipeGallery;
