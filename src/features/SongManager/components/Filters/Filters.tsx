import { useTranslation } from 'react-i18next';
import styles from './Filters.module.css';
import { getCompLevel } from '../../../../utils/search';

interface FiltersProps {
  viewMode: 'genre' | 'completion';
  availableCompletions: string[];
  selectedCompletions: string[];
  onToggleCompletion: (comp: string, isSingleSelect: boolean) => void;
  availableGenres: string[];
  selectedGenre: string;
  onSelectGenre: (genre: string) => void;
}

export default function Filters({
  viewMode,
  availableCompletions,
  selectedCompletions,
  onToggleCompletion,
  availableGenres,
  selectedGenre,
  onSelectGenre
}: FiltersProps) {
  const { t } = useTranslation();

  if (viewMode === 'genre') {
    const sortedComps = [...availableCompletions].sort((a, b) => b.localeCompare(a));
    return (
      <div className={styles.filterGroup}>
        {sortedComps.map(comp => {
          const isSelected = selectedCompletions.includes(comp);
          return (
            <button
              key={comp}
              className={`${styles.filterBtn} ${isSelected ? styles.active : ''}`}
              onClick={() => onToggleCompletion(comp, false)} // The complex logic will be in SongManager
            >
              {comp}
            </button>
          );
        })}
      </div>
    );
  }

  // viewMode === 'completion'
  const sortedGenres = [...availableGenres].sort();
  return (
    <div className={styles.filterGroup}>
      <button 
        className={`${styles.filterBtn} ${selectedGenre === 'all' ? styles.active : ''}`}
        onClick={() => onSelectGenre('all')}
      >
        {t('allFilter', 'すべて')}
      </button>
      {sortedGenres.map(genre => (
        <button
          key={genre}
          className={`${styles.filterBtn} ${selectedGenre === genre ? styles.active : ''}`}
          onClick={() => onSelectGenre(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
