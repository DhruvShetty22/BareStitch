import { useState } from "react";
import "./App.css";

// Sample product data
const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 499,
    image: "https://images.pexels.com/photos/1004016/pexels-photo-1004016.jpeg",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 1999,
    image: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg",
  },
  {
    id: 3,
    name: "Summer Dress",
    price: 1499,
    image: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg",
  },
  {
    id: 4,
    name: "Black Jeans",
    price: 1299,
    image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
  },
];

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app-container">
      <header>
        <h1>BareStitch</h1>
        <div className="cart">🛒 {cart.length}</div>
      </header>
      <main>
        <h2>New Arrivals</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} BareStitch. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;