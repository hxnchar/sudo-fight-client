const secToArr = (seconds: number): number[] => {
  const secondsInMinute = 60;
  const secondsInHour = 60 * 60;
  if (seconds < secondsInMinute) { return [seconds]; }
  if (seconds < secondsInHour) {
    const minutes = Math.floor(seconds / secondsInMinute);
    return [seconds - minutes * secondsInMinute, minutes];
  } else {
    const hours = Math.floor(seconds / secondsInHour);
    const minutes = Math.floor((seconds - hours * secondsInHour) / secondsInMinute);
    return [seconds - hours * secondsInHour - minutes * secondsInMinute, minutes, hours];
  }
};

const timeToString = (arr: number[]): string => {
  if (arr.length === 1) { return `${arr[0]}s`; }
  if (arr.length === 2) { return `${arr[1]}min ${arr[0]}s`; }
  if (arr.length === 3) { return `${arr[2]}hr ${arr[1]}min ${arr[0]}s`; }
  return '';
};

export const secondsToString = (seconds: number): string => timeToString(secToArr(seconds));
