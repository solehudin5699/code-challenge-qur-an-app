import { IResponseQuran, IResponseSurah, getQuran, getSurah } from '@/services/quran';
import useAppQuery from '../../useAppQuery';

export const useGetQuran = () => {
  return useAppQuery<IResponseQuran>(['quran'], getQuran);
};

export const useGetSurah = (id: number) => {
  return useAppQuery<IResponseSurah>(['quran-surah', id], () => getSurah(id));
};
