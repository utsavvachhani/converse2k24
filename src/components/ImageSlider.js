import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Make sure to create a CSS file for styling

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Random image URLs for the slider
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5MY9bw9L7FsL8KJA__iWInwCDJaE4YKFyQ&s',
    'https://static.toiimg.com/thumb/msid-81249654,width-400,height-225,resizemode-72/81249654.jpg',
    'https://english.loktej.com/media/392/2023-04/k29042023-05.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image, looping back to the first one when reaching the end
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change images every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="hello slider-container">
      <img className="hi slide-image" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default ImageSlider;
