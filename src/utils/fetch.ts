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
      .catch((err) => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.',
        };

        if (typeof err.response === 'undefined') reject(defaultError);
        else if (typeof err.response.data === 'undefined') reject(defaultError);
        else reject(err.response.data);
      });
  });
}
