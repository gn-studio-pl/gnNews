export const isArrayInRange = <T>(
  arr: Array<T>,
  from: number,
  to: number
): boolean => {
  return arr.length >= from && arr.length <= to;
};
