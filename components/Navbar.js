import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link href="/">Home</Link></li>
        <li className={styles.navItem}><Link href="/about">About</Link></li>
        <li className={styles.navItem}><Link href="/projects">Projects</Link></li>
        <li className={styles.navItem}><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;