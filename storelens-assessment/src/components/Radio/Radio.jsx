import React from 'react';
import styles from './Radio.module.css';

const Radio = ({ label, description, checked, onChange, name, value, className = '' }) => {
  const id = React.useId();
  
  return (
    <label className={`${styles.radioContainer} ${checked ? styles.selected : ''} ${className}`} htmlFor={id}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={styles.radioInput}
      />
      <div className={styles.radioLabel}>
        {label}
        {description && <span className={styles.radioDescription}>{description}</span>}
      </div>
    </label>
  );
};

export default Radio;
