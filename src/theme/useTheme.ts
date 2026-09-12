import React from 'react';
import { LOCAL_STORAGE_LOCAL_KEY, Theme, ThemeContext } from './ThemeContext';

export interface useThemeResults {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): useThemeResults {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme == Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_LOCAL_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
