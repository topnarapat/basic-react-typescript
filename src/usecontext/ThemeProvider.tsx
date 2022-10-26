import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext<boolean | undefined>(undefined);
const ThemeUpdateContext = createContext<any>(null);

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export default function ThemeProvider({ children }: any) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        { children }
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}