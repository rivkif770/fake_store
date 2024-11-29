import React from 'react';
import styles from './Jewelry.module.css';


const Jewelry = ({ products }) => {
  const jewelryProducts = products.filter(item => item.category === 'jewelery');

  return (
    <div className={styles.main}>
      <h2>Jewelry</h2>
      <div className={styles.productGrid}>
        {jewelryProducts.map(item => (
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

export default Jewelry;
