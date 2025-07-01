import React from 'react';
import Image from 'next/image';

import { useTheme } from './ThemeContext';

import styles from './Modal.module.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role='dialog'
        aria-modal='true'
      >
        { title && <h2>{title}</h2> }
        <button
          className={styles.close}
          onClick={onClose}
          aria-label='Close modal'
        >
          {
            theme === 'light'
            ?
              <div className={styles.xIconWrap}>
                <Image
                  className={styles.xIcon}
                  src="/icons/x-icon-dark.svg"
                  alt="Dark Colored X Icon (Close)"
                  width={17.5}
                  height={17.5}
                  priority
                />
              </div>
            :
              <div className={styles.xIconWrap}>
                <Image
                  className={styles.xIcon}
                  src="/icons/x-icon-light.svg"
                  alt="Light Colored X Icon (Close)"
                  width={17.5}
                  height={17.5}
                  priority
                />
              </div>
          }
        </button>
        <div>{ children }</div>
      </div>
    </div>
  );
}

export default Modal;