import { createContext, useContext } from "react";
export type AppSettings = {
  darkTheme: boolean;
  setDarkTheme: (c: boolean) => void;
};
export const UserSettingsContext = createContext<AppSettings>({
  darkTheme: true, // set a default value
  setDarkTheme: (darkTheme) => !darkTheme,
});
export const useSettingsContext = () => useContext(UserSettingsContext);
