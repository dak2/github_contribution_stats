import { add } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';

export const timeZone = 'Asia/Tokyo';
export const today = new Date();
export const weekDays = (today: Date): string[] => {
  return [...Array(7)].map((_, index) => {
    if (index == 0) {
      return format(utcToZonedTime(today, timeZone), 'yyyy-MM-dd HH:mm:ss zzz');
    } else {
      return format(
        utcToZonedTime(add(today, { days: -index }), timeZone),
        'yyyy-MM-dd HH:mm:ss zzz',
      );
    }
  });
};
