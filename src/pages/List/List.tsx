import { useTranslation } from 'react-i18next';
import { useSongs } from '../../hooks/useSongs';
import SongManager from '../../features/SongManager/SongManager';

export default function List() {
  const { t } = useTranslation();
  const { data: songs, isLoading, isError } = useSongs();

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', color: 'var(--text-sub)', fontSize: '1.2em', marginTop: 40 }}>
        {t('loading', '載入中...')}
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ padding: 16, backgroundColor: '#fee2e2', color: '#991b1b', border: '1px solid #f87171', borderRadius: 8, marginBottom: 16 }}>
        {t('error.fetchFailed', '無法獲取歌曲資料，請檢查網路連線或稍後再試。')}
      </div>
    );
  }

  return (
    <>
      {songs && <SongManager songs={songs} />}
    </>
  );
}
