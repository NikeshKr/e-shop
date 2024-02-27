import React from 'react';

const ProductImage = ({ description, imagePath }) => {
  return (
    <div className="product-image">
      <div className="product-image-container">
        <img src={imagePath} alt={description} />
      </div>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default ProductImage;
