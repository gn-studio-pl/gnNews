export const firstLetterToUpperCase = (text?: string) =>
  !text ? '' : text.substring(0, 1).toUpperCase() + text.substring(1);
