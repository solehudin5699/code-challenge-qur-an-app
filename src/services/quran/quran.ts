import fetch from '@/utils/fetch';

export const getQuran = () => {
  const config = {
    url: '/api/v2/surat',
  };
  return fetch(config);
};

export const getSurah = (id: number) => {
  const config = {
    url: `/api/v2/surat/${id}`,
  };
  return fetch(config);
};
