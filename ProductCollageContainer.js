import React from 'react';
import ProductImage from './ProductImage';

const ProductCollageContainer = () => {
  return (
    <div className="product-collage-container">
      <ProductImage description="IPHONE 15 PRO  From ₹134900.00 Titanium" imagePath="path/to/iphone15pro.jpg" />
      <ProductImage description="IPHONE 15  From ₹79900.00 Newphoria" imagePath="path/to/iphone15.jpg" />
      <ProductImage description="MACBOOK PRO 14\"  imagePath="path/to/macbookpro.jpg" />
      <ProductImage description="IPHONE 15 PRO  From ₹134900.00 Titanium" imagePath="path/to/iphone15pro.jpg" />
      <ProductImage description="IPHONE 15  From ₹79900.00 Newphoria" imagePath="path/to/iphone15.jpg" />
      <ProductImage description="MACBOOK PRO 14\"  imagePath="path/to/macbookpro.jpg" />
      {/* Add more ProductImage components here */}
    </div>
  );
};

export default ProductCollageContainer;

