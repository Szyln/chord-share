import { useQuery } from '@tanstack/react-query';
import { fetchSongs } from '../services/api';

export const useSongs = () => {
  return useQuery({
    queryKey: ['songs'],
    queryFn: fetchSongs,
    staleTime: 10 * 60 * 1000, // 10 分鐘內視為新鮮 (Hit Cache)
    retry: 2, // 失敗重試 2 次
  });
};
