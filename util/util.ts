export const calculateDate = (date: number) => {
  if (date < 60 * 2) {
    return { time: 1, result: 'minute' };
  }
  if (date <= 60 * 59) {
    const minute = Math.floor(date / 59);
    return { time: minute, result: 'minutes' };
  }
  if (date < 60 * 60 * 24) {
    const day = Math.floor(date / 60 / 60);
    return { time: day, result: 'hours' };
  }
  if (date < 60 * 60 * 24 * 30) {
    const day = Math.floor(date / 60 / 60 / 24);
    return { time: day, result: 'days' };
  }
  if (date < 60 * 60 * 24 * 30 * 12) {
    const month = Math.floor(date / 60 / 60 / 24 / 30);
    return { time: month, result: 'months' };
  }
  if (date >= 60 * 60 * 24 * 30 * 12) {
    const year = Math.floor(date / 60 / 60 / 24 / 30 / 12);
    return { time: year, result: 'years' };
  }
  return { time: date, result: 'minute' };
};

export const changeDate = (date: Date) => {
  const dateFormate =
    date.getFullYear() +
    '.' +
    (date.getMonth() + 1 < 9
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) +
    '.' +
    (date.getDate() < 9 ? '0' + date.getDate() : date.getDate());

  return dateFormate;
};

export const emailPattern =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

export function emailCheck(email: string) {
  return emailPattern.test(email);
}

const urlPattern = /^http[s]?:\/\/([\S]{3,})/i;

export function urlCheck(url: string) {
  return urlPattern.test(url);
}
