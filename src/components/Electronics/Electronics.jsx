import React from 'react';
import styles from './Electronics.module.css';

const Electronics = ({ products }) => {
  // const electronicsProducts = products.filter(item => item.category === 'electronics');

  return (
    <div className={styles.main}>
      <h2>Electronics</h2>
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

export default Electronics;
