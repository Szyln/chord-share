import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SongItem } from '../../../../types/Song';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  viewMode: 'genre' | 'completion';
  onToggleViewMode: () => void;
  candidates: SongItem[];
}

export default function SearchBar({
  value,
  onChange,
  viewMode,
  onToggleViewMode,
  candidates
}: SearchBarProps) {
  const { t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setShowDropdown(true);
  };

  const handleSelect = (title: string) => {
    onChange(title);
    setShowDropdown(false);
  };

  const displayCandidates = candidates.slice(0, 50);

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchWrapper} ref={wrapperRef}>
        <input
          type="text"
          className={styles.searchInput}
          value={value}
          onChange={handleInput}
          onFocus={() => setShowDropdown(true)}
          placeholder={t('searchPlaceholder', '曲名、作者で検索...')}
          autoComplete="off"
        />
        <div className={`${styles.candidatesDropdown} ${showDropdown && value && displayCandidates.length > 0 ? styles.show : ''}`}>
          {displayCandidates.map((song, i) => {
            const title = song['曲名']?.text || '';
            const author = song['作者']?.text || '';
            return (
              <div key={i} className={styles.candidateItem} onClick={() => handleSelect(title)}>
                <span className="candidate-title">{title}</span>
                <span className="candidate-author" style={{ marginLeft: 8, fontSize: '0.9em', color: 'var(--text-sub)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>person</span> {author}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <button className={styles.viewToggleBtn} onClick={onToggleViewMode}>
        <span className="material-symbols-outlined">swap_horiz</span>
        <span>{viewMode === 'genre' ? t('switchToCompletion', '完成度別へ') : t('switchToGenre', 'ジャンル別へ')}</span>
      </button>
    </div>
  );
}
