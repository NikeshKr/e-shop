import React from 'react';

const ContactCard = () => {
  return (
    <div className="contact-card">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        <p><strong>Email:</strong> example@example.com</p>
        <p><strong>Instagram:</strong> <a href="https://www.instagram.com/">@example</a></p>
        <p><strong>Facebook:</strong> <a href="https://www.facebook.com/">Example Facebook</a></p>
      </div>
      <div className="social-links">
        <a href="https://www.flipkart.com/">Flipkart</a>
        <a href="https://www.amazon.com/">Amazon</a>
      </div>
    </div>
  );
};

export default ContactCard;
