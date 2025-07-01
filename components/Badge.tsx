import React from 'react';

import styles from './Badge.module.css';

type BadgeProps = {
  color?: 'default' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
};

function Badge({ color = 'default', children }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[color]}`}>{children}</span>;
}

export default Badge;