import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Jewelry from './components/Jewelry/Jewelry';
import Books from './components/Books/Books';
import Electronics from './components/Electronics/Electronics';

import { fetchAllProducts, fetchAllBooks, fetchElectronics, fetchJewelry } from './services/productService';

import styles from './App.css';

function AppContent() {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const path = location.pathname;

      if (path === '/electronics') {
        const electronics = await fetchElectronics();
        setProducts(electronics);
      } else if (path === '/jewelry') {
        const jewelry = await fetchJewelry();
        setProducts(jewelry);
      } else if (path === '/books') {
        const books = await fetchAllBooks();
        setProducts(books);
      } else {
        const allProducts = await fetchAllProducts();
        setProducts(allProducts);
      }
    };

    fetchProductsByCategory();
  }, [location.pathname]);

  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <div className={styles.contentContainer}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jewelry" element={<Jewelry products={products} />} />
          <Route path="/electronics" element={<Electronics products={products} />} />
          <Route path="/books" element={<Books products={products} />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
