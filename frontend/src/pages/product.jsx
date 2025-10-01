// src/pages/ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiStar, FiMinus, FiPlus } from 'react-icons/fi';

const ProductDetailPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Re-run this effect if the ID in the URL changes

  // --- Render based on the state ---
  if (loading) {
    return <div className="status-message">Loading product details...</div>;
  }

  if (error) {
    return <div className="status-message">Error: {error}</div>;
  }

  if (!product) {
    return <div className="status-message">Product not found!</div>;
  }

  // --- Main component JSX ---
  return (
    <div className="product-page-container">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        {product.category} &gt; Jackets & Coats &gt; <strong>{product.name}</strong>
      </div>

      {/* Main Product Section */}
      <section className="product-main-section">
        <div className="product-images">
          {/* In a real app, you'd have multiple images from the API */}
          <div className="image-thumbnails">
            <img src={product.imgUrl} alt="Thumbnail 1" />
            <img src={product.imgUrl.replace('600', '601')} alt="Thumbnail 2" />
            <img src={product.imgUrl.replace('600', '602')} alt="Thumbnail 3" />
          </div>
          <div className="main-image">
            <img src={product.imgUrl} alt={product.name} />
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name.toUpperCase()}</h1>
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => <FiStar key={i} fill="gold" stroke="gold" />)}
            </div>
            <span>(4.8 from 328 Reviews)</span>
          </div>
          <div className="product-price">
            <span className="current-price">${product.price.toFixed(2)}</span>
            <span className="original-price">${(product.price * 1.5).toFixed(2)}</span>
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
          {/* The description now comes from your API */}
          <p>{product.description}</p>
          {/* In a real app, these details would also come from the API */}
          <ul>
            <li>Midweight woven fabric</li>
            <li>Regular fit</li>
            <li>Double-breasted front button closure</li>
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
    </div>
  );
};

export default ProductDetailPage;