import React from 'react';
import styles from './Table.module.css';

export const Table = ({ children }) => (
  <div className={styles.tableContainer}>
    <table className={styles.table}>
      {children}
    </table>
  </div>
);

export const THead = ({ children }) => <thead>{children}</thead>;
export const TBody = ({ children }) => <tbody>{children}</tbody>;
export const TR = ({ children }) => <tr className={styles.tr}>{children}</tr>;
export const TH = ({ children }) => <th className={styles.th}>{children}</th>;
export const TD = ({ children }) => <td className={styles.td}>{children}</td>;

export const Badge = ({ children, variant = 'neutral' }) => {
  const vClass = variant === 'success' ? styles.badgeSuccess : variant === 'warning' ? styles.badgeWarning : styles.badgeNeutral;
  return <span className={`${styles.badge} ${vClass}`}>{children}</span>;
}
