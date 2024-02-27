import React from 'react';
import './style.css';
import Navbar from './Navbar';
import ProductCollageContainer from './ProductCollageContainer';
import ProductSlideshow from './ProductSlideshow';
import ContactCard from './ContactCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to BHIMA !!</h1>
      <div id="product-slideshow">
        <ProductSlideshow />
      </div>
      <h1>Our Range of Products!</h1>
      <div id="product-collage">
        <ProductCollageContainer />
      </div>
      <h1>Contact Us</h1>
      <div id="contact">
        <ContactCard />
      </div>
    </div>
  );
}

export default App;
