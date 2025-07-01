import Link from 'next/link';
import Image from 'next/image';

import { useTheme } from './ThemeContext';
import ThemeToggle from './ThemeToggle';

import styles from './Navbar.module.css';

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  links?: NavLink[];
};

function Navbar({ links = [] } : NavbarProps) {
  const { theme } = useTheme();

  return (
    <nav className={styles.navbar}>
      {
        theme === 'light'
        ? <Image height='35' width='150' src='/assets/orion.png' alt='ORYN Logo' />
        : <Image height='35' width='150' src='/assets/orion-light.png' alt='ORYN Light Logo' />
      }
      <ul className={styles.links}>
        {
          links.map((link) => (
            <li key={`${link.label}__Key`}>
              <Link className={styles.link} href={link.href}>
                { link.label }
              </Link>
            </li>
          ))
        }
        <li><ThemeToggle /></li>
      </ul>
    </nav>
  );
}

export default Navbar;