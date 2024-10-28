import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>קטגוריות</h2>
      <ul>
        <li><Link to="/jewelry">Jewelry</Link></li>
        <li><Link to="/electronics">Electronics</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

