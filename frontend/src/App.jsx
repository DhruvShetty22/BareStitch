import React from 'react';
import './App.css'; 
import Header from './components/header.jsx';
import ProductPage from './components/displayPage.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductPage />
      <Footer />
    </div>
  );
}

export default App;