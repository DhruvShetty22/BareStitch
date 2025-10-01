import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="explore-section">
        <h2>EXPLORE OUR FASHION CATALOG</h2>
        <p>Browse through our fashion catalog to find a wide range of stylish clothing options. From classic looks to the latest trends, there's something for everyone.</p>
        <button>SEE OUR INSTAGRAM &rarr;</button>
      </div>
      <div className="footer-links">
        <div className="link-column">
          <h4>GENERAL</h4>
          <a href="#about">About Us</a>
          <a href="#blog">Blog</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="link-column">
          <h4>PRODUCTS</h4>
          <a href="#men">Man Fashion</a>
          <a href="#women">Woman Fashion</a>
          <a href="#shoes">Shoes & Bag</a>
          <a href="#accessories">Accessories</a>
        </div>
        <div className="link-column">
          <h4>CUSTOMER SERVICE</h4>
          <a href="#faq">FAQ</a>
          <a href="#help">Help & Support</a>
          <a href="#billing">Billing Cycle</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <div className="link-column">
          <h4>SOCIAL MEDIA</h4>
          <a href="#instagram">Instagram</a>
          <a href="#tiktok">Tiktok</a>
          <a href="#facebook">Facebook</a>
          <a href="#youtube">Youtube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;