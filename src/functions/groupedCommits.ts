import { format, utcToZonedTime } from 'date-fns-tz';
import { timeZone, weekDays, today } from '../utils/constDate';
import { Events } from '../utils/propsType';

type groupedCommits = {
  x: number;
  y: number;
};

type groupedByDates = {
  dayOfWeek: number;
  eventDate: Date;
  commitSize: number;
};

export const groupedCommits = (events: Events[]): groupedCommits[] => {
  console.log('commits', events);
  const res: groupedByDates[] = [];
  const eventDates = events.map(
    (event) =>
      new Date(
        format(
          utcToZonedTime(event.created_at, timeZone),
          'yyyy-MM-dd HH:mm:ss',
        ),
      ),
  );

  weekDays(today).map((element) => {
    eventDates.map((eventDate) => {
      const date_compared =
        element.dates.start <= eventDate && eventDate <= element.dates.end;
      date_compared
        ? res.push({ dayOfWeek: eventDate.getDay(), eventDate, commitSize: 1 })
        : null;
    });
  });
  console.log('res', res);
  const result = [0, 1, 2, 3, 4, 5, 6].map((week) => {
    const list = res.filter((r) => r.dayOfWeek === week);
    return {
      x: week + 1,
      y: list.length,
    };
  }) as groupedCommits[];
  return result;
};
