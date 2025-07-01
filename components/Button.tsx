import React from 'react';

import styles from './Button.module.css';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

function Button({
  variant = 'primary',
  children,
  onClick,
  type = 'button',
  disabled = false,
} : ButtonProps) {
  return (
    <button
      className={`${styles.button} ${variant === 'secondary' ? styles.secondary : styles.primary}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <span className={styles.buttonContent}>{children}</span>
    </button>
  );
}

export default Button;