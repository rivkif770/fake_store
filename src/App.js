import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Jewelry from './components/Jewelry/Jewelry';
import Electronics from './components/Electronics/Electronics';
import { fetchAllProducts } from './services/productService';
import styles from './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts().then(setProducts);
  }, []);

  return (
    <Router>
      <div className={styles.appContainer}>
        <Sidebar />
        <div className={styles.contentContainer}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jewelry" element={<Jewelry products={products} />} />
            <Route path="/electronics" element={<Electronics products={products} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Export the App component for use in other files
export default App;
