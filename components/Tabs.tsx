import { useState } from 'react';

import { useTheme } from './ThemeContext';

import styles from './Tabs.module.css';

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

function Tabs({ tabs }: TabsProps) {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.tabs}>
      <div style={
        theme === 'light'
        ? {borderBottom: "1px solid #ccc"}
        : {borderBottom: "1px solid #254250"}}
        className={styles.tablist}
        role='tablist'
      >
        {
          tabs.map((tab, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeIndex === index}
              className={activeIndex === index ? styles.active : ''}
              onClick={() => setActiveIndex(index)}
            >
              { tab.label }
            </button>
          ))
        }
      </div>
      <div className={styles.tabpanel} role='tabpanel'>
        { tabs[activeIndex].content }
      </div>
    </div>
  );
}

export default Tabs;