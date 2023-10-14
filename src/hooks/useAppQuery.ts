import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { QueryKey } from '@tanstack/query-core';

export default function useAppQuery<T>(
  type: QueryKey,
  fetcher: () => Promise<any>,
  option?: UseQueryOptions<any, unknown, any>
) {
  return useQuery<T>(type, fetcher, {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    ...option,
  });
}
