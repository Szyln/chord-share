import { useTranslation } from 'react-i18next';
import { SongItem } from '../../../../types/Song';
import { getCompLevel } from '../../../../utils/search';
import styles from './SongCard.module.css';

interface SongCardProps {
  song: SongItem;
  viewMode: 'genre' | 'completion';
}

export default function SongCard({ song, viewMode }: SongCardProps) {
  const { t } = useTranslation();

  const title = song['曲名']?.text || 'Untitled';
  const mainUrl = (song['コード'] && song['コード'].text.trim() !== '')
    ? (song['コード'].url || '')
    : (song['橫斷検索'] ? (song['橫斷検索'].url || '') : '');

  const keyText = song['Key'] ? String(song['Key'].text).trim() : '';
  const keyNum = Number(keyText);
  const displayKey = (!isNaN(keyNum) && keyNum > 0 && !keyText.startsWith('+')) ? '+' + keyText : keyText;
  const showKey = keyText !== '0' && keyText !== '';

  const compText = song['完成度']?.text || '';
  const compLevel = getCompLevel(compText);
  
  let badgeClass = styles.badgeGenre;
  let badgeText = '';

  if (viewMode === 'genre') {
    badgeText = compText;
    if (compLevel >= 4) badgeClass = styles.badgeCompletionHigh;
    else if (compLevel >= 2) badgeClass = styles.badgeCompletionMedium;
    else if (compLevel >= 0) badgeClass = styles.badgeCompletionLow;
  } else {
    badgeText = song['ジャンル']?.text || '';
  }

  const diffUrl = song['音域']?.url || '';
  const ytUrl = song['Youtube']?.url || '';

  return (
    <li className={styles.songItem}>
      <div className={styles.songTitleWrapper}>
        {mainUrl ? (
          <a href={mainUrl} target="_blank" rel="noreferrer" className={styles.songLink}>
            <span className="material-symbols-outlined">music_note</span>{title}
          </a>
        ) : (
          <span className={`${styles.songLink} ${styles.disabled}`}>
            <span className="material-symbols-outlined">music_note</span>{title}
          </span>
        )}
        {showKey && <span className={styles.keyBadge}>{displayKey}</span>}
      </div>
      <div className={styles.songMetaRow}>
        <div className="subtext-area">
          {badgeText && <span className={`${styles.badge} ${badgeClass}`}>{badgeText}</span>}
        </div>
        <div className={styles.btnGroup}>
          {diffUrl ? (
            <a href={diffUrl} target="_blank" rel="noreferrer" className={styles.iconBtn}>
              <span className="material-symbols-outlined">equalizer</span>{t('diffBtn', '音域')}
            </a>
          ) : (
            <span className={`${styles.iconBtn} ${styles.disabled}`}>
              <span className="material-symbols-outlined">equalizer</span>{t('noLink', 'リンクなし')}
            </span>
          )}
          {ytUrl ? (
            <a href={ytUrl} target="_blank" rel="noreferrer" className={styles.iconBtn}>
              <span className="material-symbols-outlined">smart_display</span>{t('ytBtn', '動画')}
            </a>
          ) : (
            <span className={`${styles.iconBtn} ${styles.disabled}`}>
              <span className="material-symbols-outlined">smart_display</span>{t('noLink', 'リンクなし')}
            </span>
          )}
        </div>
      </div>
    </li>
  );
}
