import { add, startOfDay, endOfDay } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';

type weekDays = {
  dates: {
    start: Date;
    end: Date;
  };
};

export const timeZone = 'Asia/Tokyo';
export const today = new Date();
export const weekDays = (today: Date): weekDays[] => {
  return [...Array(7)].map((_, index) => {
    const startDate = new Date(
      format(
        utcToZonedTime(startOfDay(add(today, { days: -index })), timeZone),
        'yyyy-MM-dd HH:mm:ss',
      ),
    );
    const endDate = new Date(
      format(
        utcToZonedTime(endOfDay(add(today, { days: -index })), timeZone),
        'yyyy-MM-dd HH:mm:ss',
      ),
    );
    return {
      dates: {
        start: startDate,
        end: endDate,
      },
    };
  });
};
