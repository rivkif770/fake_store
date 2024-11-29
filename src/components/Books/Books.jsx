import React from 'react';
import styles from './Books.module.css';

const Books = ({ products }) => {

  return (
    <div className={styles.main}>
      <h2>Books</h2>
      <div className={styles.productGrid}>
        {products.map(item => (
          <div key={item.id} className={styles.productCard}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
            <p className={styles.price}>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
