import { add, startOfDay, endOfDay } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';

type weekDays = {
  index: number;
  dates: {
    start: string;
    end: string;
  };
};

export const timeZone = 'Asia/Tokyo';
export const today = new Date();
export const weekDays = (today: Date): weekDays[] => {
  return [...Array(7)].map((_, index) => {
    // indexが0の場合は当日を含めるようにしている
    if (index == 0) {
      return {
        index: index + 1,
        dates: {
          start: format(
            utcToZonedTime(startOfDay(today), timeZone),
            'yyyy-MM-dd HH:mm:ss',
          ),
          end: format(
            utcToZonedTime(endOfDay(today), timeZone),
            'yyyy-MM-dd HH:mm:ss',
          ),
        },
      };
    } else {
      return {
        index: index + 1,
        dates: {
          start: format(
            utcToZonedTime(startOfDay(add(today, { days: -index })), timeZone),
            'yyyy-MM-dd HH:mm:ss',
          ),
          end: format(
            utcToZonedTime(endOfDay(add(today, { days: -index })), timeZone),
            'yyyy-MM-dd HH:mm:ss',
          ),
        },
      };
    }
  });
};
