import { TResponseQuran, IResponseSurah, getQuran, getSurah } from '@/services/quran';
import useAppQuery from '../../useAppQuery';

export const useGetQuran = () => {
  return useAppQuery<TResponseQuran>(['quran'], getQuran);
};

export const useGetSurah = (id: number) => {
  return useAppQuery<IResponseSurah>(['quran-surah', id], () => getSurah(id));
};
