import { useEffect } from 'react';
import styles from './Toast.module.css';

type ToastProps = {
  message: string;
  duration?: number;
  onClose: () => void;
};

function Toast({ message, duration = 3000, onClose }: ToastProps) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  return <div className={styles.toast}>{ message }</div>;
}

export default Toast;