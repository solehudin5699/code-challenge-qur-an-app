import fetch from '@/utils/fetch';

export const getQuran = () => {
  const config = {
    url: '/penggguna/QuranJSON/master/quran.json',
  };
  return fetch(config);
};

export const getSurah = (id: number) => {
  const config = {
    url: `/penggguna/QuranJSON/master/surah/${id}.json`,
  };
  return fetch(config);
};
