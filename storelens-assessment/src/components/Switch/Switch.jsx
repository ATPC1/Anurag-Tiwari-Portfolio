import React from 'react';
import styles from './Switch.module.css';

const Switch = ({ checked, onChange, label, description, id }) => {
  const generatedId = id || React.useId();
  
  return (
    <label className={styles.switchContainer} htmlFor={generatedId}>
      <input 
        id={generatedId}
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
        className="visually-hidden" 
      />
      <div className={`${styles.switch} ${checked ? styles.checked : ''}`}>
        <div className={styles.thumb} />
      </div>
      {(label || description) && (
        <div>
          {label && <div className={styles.label}>{label}</div>}
          {description && <div className={styles.description}>{description}</div>}
        </div>
      )}
    </label>
  );
};

export default Switch;
