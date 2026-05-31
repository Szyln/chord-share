import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.siteFooter}>
      &copy; {currentYear} 8kbps toolbox. All rights reserved.
    </footer>
  );
}
