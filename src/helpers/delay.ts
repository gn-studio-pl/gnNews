export const delay = (delay: number, value = ""): Promise<unknown> =>
  new Promise((resolve) => setTimeout(resolve, delay, value));
