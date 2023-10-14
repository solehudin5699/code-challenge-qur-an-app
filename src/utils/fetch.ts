import { BASE_URL } from '@/configs';
import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: BASE_URL,
});

export default function fetch<T = any>(config: AxiosRequestConfig<any>) {
  return new Promise<T>((resolve, reject) => {
    instance(config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.',
          error,
        };

        if (typeof error.response === 'undefined') reject(defaultError);
        else if (typeof error.response.data === 'undefined') reject(defaultError);
        else reject(error.response.data);
      });
  });
}
