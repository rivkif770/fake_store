import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.welcomeBox}>
        <h1>ברוכים הבאים</h1>
      </div>
    </div>
  );
};

export default Home;
