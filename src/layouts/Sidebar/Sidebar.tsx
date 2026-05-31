import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSongs } from '../../hooks/useSongs';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  userId?: string;
}

export default function Sidebar({ isOpen, onClose, userId }: SidebarProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const { data: songs } = useSongs();

  const uniqueUsers = Array.from(new Set(
    (songs || [])
      .map(song => song['User']?.text?.trim())
      .filter((u): u is string => !!u)
  )).sort();

  if (userId && !uniqueUsers.includes(userId)) {
    uniqueUsers.push(userId);
    uniqueUsers.sort();
  }

  return (
    <>
      <div 
        className={`${styles.drawerBackdrop} ${isOpen ? styles.active : ''}`} 
        onClick={onClose} 
      />
      
      <nav className={`${styles.navDrawer} ${isOpen ? styles.active : ''}`}>
        <div className={styles.drawerHeader}>
          <h2 className={styles.drawerTitle}></h2>
          <button className={styles.drawerCloseBtn} onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className={styles.drawerContent}>
          <div className={styles.categoryTitle}>{t('sidebar.playerCategory', 'Player')}</div>
          {uniqueUsers.map(u => (
            <Link 
              key={u}
              to={`/${u}/list`} 
              className={`${styles.drawerItem} ${location.pathname === `/${u}/list` ? styles.active : ''}`}
              onClick={onClose}
            >
              <span className="material-symbols-outlined">person</span>
              <span>{u}</span>
            </Link>
          ))}
          {uniqueUsers.length === 0 && !userId && (
             <div style={{ padding: '0 20px', color: 'var(--text-sub)' }}>Loading...</div>
          )}

          <div className={styles.categoryTitle} style={{ marginTop: 20 }}>{t('sidebar.toolCategory', 'Tool')}</div>
          <Link 
            to="/tool/which-line"
            className={`${styles.drawerItem} ${location.pathname === '/tool/which-line' ? styles.active : ''}`}
            onClick={onClose}
          >
            <span className="material-symbols-outlined">format_list_numbered</span>
            <span>{t('sidebar.menuTool', '行數工具')}</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
