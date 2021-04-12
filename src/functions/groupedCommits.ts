import { format, utcToZonedTime } from 'date-fns-tz';
import { timeZone, weekDays, today } from '../utils/constDate';
import { Events } from '../utils/propsType';

type groupedCommits = {
  x: number;
  y: number;
};

type groupedByDates = {
  dayOfWeek: number;
  commitDate: Date;
  commitSize: number;
};

type commitSizeByDate = {
  date: Date;
  commitSize: number;
};

export const groupedCommits = (events: Events[]): groupedCommits[] => {
  const commitSizes = commitSizeByDate(events);
  const commitComparedDate = dateCompare(today, commitSizes);
  console.log('test', commitComparedDate);
  console.log('test2', grouping(commitComparedDate));
  return orderByAsc(grouping(commitComparedDate));
};

const commitSizeByDate = (events: Events[]): commitSizeByDate[] => {
  return events.map((event) => {
    return {
      date: new Date(
        format(
          utcToZonedTime(event.created_at, timeZone),
          'yyyy-MM-dd HH:mm:ss',
        ),
      ),
      commitSize: event.payload.size,
    };
  });
};

const dateCompare = (
  today: Date,
  commitSizes: commitSizeByDate[],
): groupedByDates[] => {
  const res: groupedByDates[] = [];
  weekDays(today).map((element) => {
    commitSizes.map((commit) => {
      // 指定日付内のcommitかどうか確認
      const date_compared =
        element.dates.start <= commit.date && commit.date <= element.dates.end;
      date_compared
        ? res.push({
            dayOfWeek: commit.date.getDay(),
            commitDate: commit.date,
            commitSize: commit.commitSize,
          })
        : null;
    });
  });
  return res;
};

const grouping = (commitComparedDate: groupedByDates[]): groupedCommits[] => {
  return [0, 1, 2, 3, 4, 5, 6].map((week) => {
    const list = commitComparedDate.filter(
      (commit) => commit.dayOfWeek === week,
    );
    console.log('list', list);
    const commitSize = list.reduce(
      (prev, current) => prev + current.commitSize,
      0,
    );
    return {
      x: week,
      y: commitSize,
    };
  });
};

const orderByAsc = (groupedCommits: groupedCommits[]): groupedCommits[] => {
  const dayOfWeek = today.getDay();
  // 今日を一番最後として並び替える
  // https://stackoverflow.com/a/17892824
  const orderedCommits = groupedCommits
    .slice(dayOfWeek + 1)
    .concat(groupedCommits.slice(0, dayOfWeek + 1));
  console.log('commits', orderedCommits);
  return orderedCommits.map((commit, index) => {
    return {
      x: index + 1,
      y: commit.y,
    };
  });
};
