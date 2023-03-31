export const randomNumber = (count: number) =>
  +Math.random().toString().slice(-count);
