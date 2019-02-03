import React from 'react';

export const themes = {
  light: {
    green: '#4caf50',
  },
  dark: {
    green: '#006400',
  },
};

export const ThemeContext = React.createContext(
  themes.dark, // default value
);
