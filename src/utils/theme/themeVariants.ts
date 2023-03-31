import { lightTheme } from './lightMode';

export enum Theme {
  LIGHT = 'LIGHT',
}

export type ThemeType = typeof lightTheme;

export const themeVariants = {
  [Theme.LIGHT]: lightTheme,
};
