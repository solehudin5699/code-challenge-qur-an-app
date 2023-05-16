import dayjsModule from 'dayjs';

import 'dayjs/locale/id';

dayjsModule.locale('id');

export const dayjs = dayjsModule;

export const dateFormat = (date?: Date | string, format = 'YYYY/MM/DD') => dayjsModule(date).format(format);


export const getDatesRange = (
  startDate: Date | string,
  endDate: Date | string,
  unit: 'day' | 'month' | 'year' = 'day'
) => {
  let start = dayjs(startDate);
  let end = dayjs(endDate);
  const diff = end.diff(start, unit);
  let result = [];

  for (let i = 0; i <= diff; i++) {
    let newDate = start.add(i, unit).format('YYYY-MM-DD');
    result.push(newDate);
  }
  return result;
};
