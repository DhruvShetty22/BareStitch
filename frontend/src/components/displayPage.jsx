import React from 'react';
import design1 from '../../public/1.png';
import design2 from '../../public/2.png';
import design3 from '../../public/3.png';
import design5 from '../../public/5.png';
import design6 from '../../public/6.png';
import design7 from '../../public/7.png';
import design8 from '../../public/8.png';
import design9 from '../../public/9.png';
import { FiStar, FiMinus, FiPlus } from 'react-icons/fi';

const Review = ({ name, time, text }) => (
  <div className="review">
    <div className="review-header">
      <div className="review-avatar">{name.charAt(0)}</div>
      <div>
        <p className="review-name">{name}</p>
        <div className="review-stars">
          {[...Array(5)].map((_, i) => <FiStar key={i} fill="gold" stroke="gold" />)}
        </div>
      </div>
    </div>
    <p className="review-time">{time}</p>
    <p className="review-text">{text}</p>
  </div>
);

// Helper component for a related product
const RelatedProduct = ({ img, name, price }) => (
  <div className="related-product-card">
    <img src={img} alt={name} />
    <p className="related-product-name">{name}</p>
    <p className="related-product-price">${price}</p>
  </div>
);


const displayPage = () => {
  return (
    <main className="product-page-container">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        Woman Fashion &gt; Jackets & Coats &gt; <strong>Nadetta Coat Beige</strong>
      </div>

      {/* Main Product Section */}
      <section className="product-main-section">
        <div className="product-images">
          <div className="image-thumbnails">
            <img src={design1} alt="Thumbnail 1" />
            <img src={design2}  alt="Thumbnail 2" />
            <img src={design3} alt="Thumbnail 3" />
          </div>
          <div className="main-image">
            <img src={design3} alt="Nadetta Coat Beige" />
          </div>
        </div>
        <div className="product-info">
          <h1>NADETTA COAT BEIGE</h1>
          <div className="product-rating">
            <div className="stars">
                {[...Array(5)].map((_, i) => <FiStar key={i} fill="gold" stroke="gold" />)}
            </div>
            <span>(4.8 from 328 Reviews)</span>
          </div>
          <div className="product-price">
            <span className="current-price">$350</span>
            <span className="original-price">$600</span>
          </div>
          <div className="product-options">
            <div className="color-selection">
              <p>Select Color</p>
              <button className="color-swatch beige active"></button>
              <button className="color-swatch black"></button>
            </div>
            <div className="size-selection">
              <p>Select Size</p>
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button className="active">L</button>
              <button>XL</button>
            </div>
          </div>
          <div className="product-actions">
            <div className="quantity-selector">
              <p>Quantity</p>
              <div>
                <button><FiMinus /></button>
                <span>1</span>
                <button><FiPlus /></button>
              </div>
            </div>
            <button className="add-to-cart">ADD TO CART</button>
            <button className="buy-now">BUY IT NOW</button>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="product-details-section">
        <div className="details-list">
            <h3>PRODUCT DETAIL</h3>
            <ul>
                <li>Midweight woven fabric</li>
                <li>Regular fit</li>
                <li>Peak lapels</li>
                <li>Drop shoulders</li>
                <li>Front flap pockets</li>
                <li>Button cuffs</li>
                <li>Front ilusion welt pocket</li>
                <li>97% Polyester 3% Elastane</li>
                <li>Double-breasted front button closure</li>
                <li>Dry Clean</li>
            </ul>
        </div>
        <div className="size-fit-guide">
            <h3>SIZE & FIT</h3>
            <table>
                <tbody>
                    <tr><td>Shoulder</td><td>: 50cm / 19.75in</td></tr>
                    <tr><td>Bust</td><td>: 124cm / 48.75in</td></tr>
                    <tr><td>Length</td><td>: 120cm / 48in</td></tr>
                    <tr><td>Sleeve length</td><td>: 64cm / 25.25in</td></tr>
                </tbody>
            </table>
        </div>
      </section>

      {/* Ratings and Reviews */}
      <section className="reviews-section">
        <h2>RATING & REVIEWS (328)</h2>
        <div className="reviews-grid">
            <Review name="Helene Joy" time="yesterday" text="As a busy professional, I need outerwear that's both stylish and practical, and this beige coat ticks all my boxes. It's sleek and sophisticated, ideal for meetings and client lunches, yet comfortable enough for everyday wear."/>
            <Review name="Sarah Jasmine" time="2 days ago" text="I'm in love with my beige coat! It's so soft and cozy, like being wrapped in a warm hug. The color is gorgeous and goes with everything in my wardrobe."/>
        </div>
      </section>

      {/* Related Products Section */}
       <section className="related-products-section">
        <h2>RELATED PRODUCTS</h2>
        <div className="related-products-grid">
            <RelatedProduct img="https://placehold.co/300x350/d3c8c0/333" name="NAUTICAL LOGO LONG COAT" price="370" />
            <RelatedProduct img="https://placehold.co/300x350/e8e2d9/333" name="JACQUARD BLOUSON JACKET" price="275" />
            <RelatedProduct img="https://placehold.co/300x350/a98d7a/333" name="BAROCCO BOMBER JACKET" price="225" />
        </div>
      </section>
    </main>
  );
};

export default displayPage;