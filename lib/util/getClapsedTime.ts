const second: number = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 31;
const year = month * 12;

const TIME_IN_MILLISECONDS: Record<string, number> = {
  second,
  minute,
  hour,
  day,
  month,
  year,
};

export const getElapsedTime = (createdAt: string): string => {
  const now = new Date();
  const createdAtDate = new Date(createdAt);
  const elapsedTime: number = now.getTime() - createdAtDate.getTime();
  const { minute, hour, day, month, year } = TIME_IN_MILLISECONDS;

  switch (true) {
    case year * 2 <= elapsedTime:
      return `${Math.floor(elapsedTime / year)} years ago`;
    case year <= elapsedTime:
      return `1 year ago`;
    case month * 2 <= elapsedTime:
      return `${Math.floor(elapsedTime / month)} months ago`;
    case month <= elapsedTime:
      return `1 month ago`;
    case day * 2 <= elapsedTime:
      return `${Math.floor(elapsedTime / day)} days ago`;
    case day <= elapsedTime:
      return `1 day ago`;
    case hour * 2 <= elapsedTime:
      return `${Math.floor(elapsedTime / hour)} hours ago`;
    case hour <= elapsedTime:
      return `1 hour ago`;
    case minute * 2 <= elapsedTime:
      return `${Math.floor(elapsedTime / minute)} minutes ago`;
    default:
      return `1 minute ago`;
  }
};
