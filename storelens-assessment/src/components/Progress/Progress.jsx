import React from 'react';
import styles from './Progress.module.css';

const Progress = ({ value = 0, max = 100, className = '' }) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  return (
    <div className={`${styles.progressContainer} ${className}`} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
      <div 
        className={styles.progressBar} 
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default Progress;
