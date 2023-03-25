import { type AppType } from "next/dist/shared/lib/utils";
import React, { useEffect, useState } from "react";
import { ThemeContext } from "~/data/ThemeContext";
import { EventsContext, EventType } from "~/data/EventsContext";
import "~/styles/globals.css";
import { getEvents } from "./api/events";
// import Parser from "rss-parser";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      const events = await getEvents();
      setEvents(events);
    }

    void fetchEvents();
  }, []);

  // useEffect(() => {
  //   async function fetchEvents() {
  //     const res = await fetch("/api/events");
  //     const data: EventType[] = await res.json();
  //     setEvents(data);
  //   }
  //   void fetchEvents();
  // }, []);

  // console.log(events);

  // useEffect(() => {
  //   async function fetchEvents() {
  //     const feed = await new Parser().parseURL(rssUrl);

  //     if (feed.items.length > 0) {
  //       const mappedEvents: EventType[] = feed.items.map(
  //         (item): EventType => ({
  //           author: item.author,
  //           categories: item.categories,
  //           content: item.content,
  //           contentSnippet: item.contentSnippet,
  //           creator: item.creator,
  //           enclosure: item.enclosure,
  //           guid: item.guid,
  //           isoDate: item.isoDate,
  //           link: item.link,
  //           pubDate: item.pubDate,
  //           title: item.title,
  //         })
  //       );
  //       setEvents(mappedEvents);
  //     }
  //   }
  //   void fetchEvents();
  // }, []);

  return (
    <EventsContext.Provider value={events}>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </EventsContext.Provider>
  );
};

export default MyApp;
