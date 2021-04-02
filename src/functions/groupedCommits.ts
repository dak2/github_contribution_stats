import { format, utcToZonedTime } from 'date-fns-tz';
import { timeZone, weekDays, today } from '../utils/constDate';
import { Commits } from '../utils/propsType';

type groupedCommits = {
  x: number;
  y: number;
};

type grouped = {
  dayOfWeek: number;
  commitDate: Date;
};

export const groupedCommits = (commits: Commits[]): groupedCommits[] => {
  const res: grouped[] = [];
  const commitDates = commits.map(
    (commit) =>
      new Date(
        format(
          utcToZonedTime(commit.created_at, timeZone),
          'yyyy-MM-dd HH:mm:ss',
        ),
      ),
  );

  weekDays(today).map((element) => {
    commitDates.map((commitDate) => {
      const date_compared =
        element.dates.start <= commitDate && commitDate <= element.dates.end;
      date_compared
        ? res.push({ dayOfWeek: commitDate.getDay(), commitDate })
        : null;
    });
  });
  const result = [0, 1, 2, 3, 4, 5, 6].map((week) => {
    const list = res.filter((r) => r.dayOfWeek === week);
    return {
      x: week+1,
      y: list.length,
    };
  }) as groupedCommits[];
  return result;
};
