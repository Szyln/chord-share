import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const X_URL = 'https://x.com/aquasf16';
const YT_URL = 'https://www.youtube.com/@8kbps';

export default function Header({ onToggleSidebar }: HeaderProps) {
  const { t, i18n } = useTranslation();
  
  // Theme state
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('appTheme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('appTheme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  const toggleLang = () => {
    const newLang = i18n.language === 'ja' ? 'zh-TW' : 'ja';
    i18n.changeLanguage(newLang);
    localStorage.setItem('appLang', newLang);
  };

  return (
    <div className={styles.controlsHeader}>
      <div className={styles.headerTitleWrapper}>
        <button
          className={`${styles.actionBtn} ${styles.iconOnly} ${styles.menuToggle}`}
          onClick={onToggleSidebar}
          title="Toggle Menu"
        >
          <span className={`material-symbols-outlined ${styles.menuIcon}`}>menu</span>
        </button>
        <h1 className={styles.headerTitle}>{t('list.title')}</h1>

        <div className={styles.socialLinks}>
          <a href={X_URL} target="_blank" rel="noreferrer" className={styles.socialIcon} title="X (Twitter)">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href={YT_URL} target="_blank" rel="noreferrer" className={`${styles.socialIcon} ${styles.yt}`} title="YouTube">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M21.582 6.186a2.684 2.684 0 0 0-1.884-1.895C17.973 3.846 12 3.846 12 3.846s-5.973 0-7.698.445a2.684 2.684 0 0 0-1.884 1.895C1.964 7.915 1.964 12 1.964 12s0 4.085.454 5.814a2.684 2.684 0 0 0 1.884 1.895c1.725.445 7.698.445 7.698.445s5.973 0 7.698-.445a2.684 2.684 0 0 0 1.884-1.895c.454-1.729.454-5.814.454-5.814s0-4.085-.454-5.814zM9.96 15.485V8.515L15.96 12l-6 3.485z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.headerActions}>
        <button className={`${styles.actionBtn} ${styles.iconOnly}`} onClick={toggleTheme} title="Toggle Theme">
          <span className="material-symbols-outlined">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
        <button className={styles.actionBtn} onClick={toggleLang}>
          <span className="material-symbols-outlined">translate</span>
          <span>{i18n.language === 'ja' ? '中文' : '日本語'}</span>
        </button>
      </div>
    </div>
  );
}
