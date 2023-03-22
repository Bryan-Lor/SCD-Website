import { type AppType } from "next/dist/shared/lib/utils";
import React, { useEffect, useState } from "react";
import { ThemeContext } from "~/data/ThemeContext";
import { EventsContext, EventType, rssUrl } from "~/data/EventsContext";
import Parser from "rss-parser";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  // const [events, setEvents] = useState<{ [key: string]: any }[]>([]);
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      // const feed = await new Parser<{ [key: string]: any }[]>().parseURL(
      const feed = await new Parser<EventType[]>().parseURL(rssUrl);
      if (feed.items.length > 0) {
        const mappedEvents: EventType[] = feed.items.map((item) => ({
          author: item.author,
          categories: item.categories,
          content: item.content,
          contentSnippet: item.contentSnippet,
          creator: item.creator,
          enclosure: item.enclosure,
          guid: item.guid,
          isoDate: item.isoDate,
          link: item.link,
          pubDate: item.pubDate,
          title: item.title,
        }));
        setEvents(mappedEvents);
      }
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
