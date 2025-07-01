import React from 'react';

import styles from './Alert.module.css';

type AlertType = 'info' | 'success' | 'warning' | 'error';

type AlertProps = {
  type?: AlertType;
  children: React.ReactNode;
};

function Alert({ type = 'info', children }: AlertProps) {
  return <div className={`${styles.alert} ${styles[type]}`}><strong>{children}</strong></div>;
}

export default Alert;