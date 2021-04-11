import { Repos } from '../utils/propsType';

type groupedLanguages = {
  x: number;
  y: number;
  label: string;
};

export const groupedLanguages = (repos: Repos[]) => {
  const existsLanguages = repos.filter((repo) => repo.language != null);
  const res = orderdDesc(Object.entries(groupBy(existsLanguages, 'language')));
  return convertToChartData(res)
};

const groupBy = (objectArray: any[], property: string) => {
  return objectArray.reduce(function (acc, obj) {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }

    if (acc[key] != {}) {
      acc[key].push(1);
      acc[key] = [
        acc[key].reduce((prev: number, current: number) => prev + current, 0),
      ];
    }
    return acc;
  }, {});
};

const orderdDesc = (ary: any[]) => {
  return ary.sort((a: any, b: any) => {
    return b[1][0] - a[1][0];
  });
};

const convertToChartData = (ary: any[]) => {
  const res: any = [];
  ary.forEach((elm, index) => {
    return res.push({
      x: index + 1,
      y: elm[1][0],
      label: elm[0],
    });
  });
  return res;
};
