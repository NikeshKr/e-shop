import React, { useState, useEffect } from 'react';

const ProductSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "path/to/image1.jpg",
    "path/to/image2.jpg",
    "path/to/image3.jpg",
    // Add more image paths as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="product-slideshow-container">
      <img src={images[currentImageIndex]} alt={`Product ${currentImageIndex + 1}`} />
    </div>
  );
};

export default ProductSlideshow;
