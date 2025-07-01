import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { useTheme } from './ThemeContext';

import styles from './Accordion.module.css';

type AccordionItem = {
  title: string;
  content: string | React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
};

function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const { theme } = useTheme();
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndices(prev =>
      allowMultiple
        ? prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
        : prev.includes(index)
        ? []
        : [index]
    );
  };

  return (
    <div className={styles.accordion}>
      {
        items.map((item, index) => {
          const isOpen = openIndices.includes(index);

          return (
            <div className={styles.item} key={index}>
              <button
                className={styles.trigger}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`content-${index}`}
                id={`trigger-${index}`}
              >
                { item.title }
                <span className={`${styles.icon} ${isOpen ? styles.rotate : ""}`}>
                  {
                    theme === 'light'
                    ?
                      <Image
                        className={styles.chevron__dark}
                        src="/icons/chevron-down-dark.svg"
                        alt="Dark Colored Chevron Down Icon"
                        width={15}
                        height={15}
                        priority
                      />
                    :
                      <Image
                        className={styles.chevron__light}
                        src="/icons/chevron-down-light.svg"
                        alt="Light Colored Chevron Down Icon"
                        width={15}
                        height={15}
                        priority
                      />
                  }
                </span>
              </button>
              <AnimatePresence initial={false}>
                {
                  isOpen && (
                    <motion.div
                      key="content"
                      className={styles.content}
                      role="region"
                      id={`content-${index}`}
                      aria-labelledby={`trigger-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        { item.content }
                      </div>
                    </motion.div>
                  )
                }
              </AnimatePresence>
            </div>
          );
        }
      )
    }
    </div>
  );
}

export default Accordion;