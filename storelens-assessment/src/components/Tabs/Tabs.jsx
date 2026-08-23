import React from 'react';
import styles from './Tabs.module.css';

export const TabsList = ({ children, className = '' }) => (
  <div className={`${styles.tabsList} ${className}`} role="tablist">
    {children}
  </div>
);

export const Tab = ({ children, active, onClick, className = '' }) => (
  <button 
    className={`${styles.tab} ${active ? styles.active : ''} ${className}`} 
    onClick={onClick}
    role="tab"
    aria-selected={active}
  >
    {children}
  </button>
);
