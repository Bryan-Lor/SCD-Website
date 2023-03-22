import { createContext, useContext } from "react";

export type ThemeSettings = {
  darkTheme: boolean;
  setDarkTheme: (c: boolean) => void;
};

export const ThemeContext = createContext<ThemeSettings>({
  darkTheme: true, // set a default value
  setDarkTheme: (darkTheme) => !darkTheme,
});

export const useThemeContext = () => useContext(ThemeContext);
