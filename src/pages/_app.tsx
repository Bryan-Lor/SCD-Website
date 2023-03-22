import { type AppType } from "next/dist/shared/lib/utils";
import React, { useEffect, useState } from "react";
import { ThemeContext } from "~/data/ThemeContext";
import { EventsContext, rssUrl } from "~/data/EventsContext";
import Parser from "rss-parser";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [events, setEvents] = useState<{ [key: string]: any }[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      const feed = await new Parser<{ [key: string]: any }[]>().parseURL(
        rssUrl
      );
      if (feed.items.length > 0) setEvents(feed.items);
    }
    fetchEvents();
  }, []);

  return (
    <EventsContext.Provider value={events}>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </EventsContext.Provider>
  );
};

export default MyApp;
