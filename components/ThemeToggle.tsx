import Image from 'next/image';

import { useTheme } from './ThemeContext';

import styles from './ThemeToggle.module.css';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      { theme === 'light'
        ? <Image height={30} width={15} src="/icons/lightbulb-dark.svg" alt='Dark Colored Lightbulb Icon (Theme Toggle)' />
        : <Image height={30} width={15} src="/icons/lightbulb-light.svg" alt='Light Colored Lightbulb Icon (Theme Toggle)' />
      }
    </button>
  );
}

export default ThemeToggle;