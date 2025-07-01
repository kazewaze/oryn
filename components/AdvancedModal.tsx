import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import { useTheme } from './ThemeContext';

import styles from './Modal.module.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

function AdvancedModal({ isOpen, onClose, title, children }: ModalProps) {
  const { theme } = useTheme();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableEls = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];

        if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        } else if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Focus the Modal on Open...
    setTimeout(() => {
      modalRef.current?.focus();
    }, 0);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role='dialog'
        aria-modal='true'
        ref={modalRef}
        tabIndex={-1}
      >
        {title && <h2>{title}</h2>}
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
        <div>{children}</div>
      </div>
    </div>
  );
}

export default AdvancedModal;