import { type AppType } from "next/dist/shared/lib/utils";
import React, { useState } from "react";
import "~/styles/globals.css";
import { UserSettingsContext } from "~/data/ThemeContext";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  return (
    <UserSettingsContext.Provider value={{ darkTheme, setDarkTheme }}>
      <Component {...pageProps} />
    </UserSettingsContext.Provider>
  );
};

export default MyApp;
