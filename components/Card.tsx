import React from 'react';

import styles from './Card.module.css';

type CardProps = {
  title?: string;
  children: React.ReactNode;
};

function Card({ title, children }: CardProps) {
  return (
    <div className={styles.card}>
      { title && <h3 className={styles.title}>{ title }</h3> }
      <div className={styles.content}>
        { children }
      </div>
    </div>
  );
}

export default Card;