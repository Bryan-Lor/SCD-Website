import { createContext, useContext } from "react";

export type EventType = {
  // author: string | undefined;
  categories: string[] | undefined;
  content: string | undefined;
  contentSnippet: string | undefined;
  creator: string | undefined;
  enclosure: { url: string } | undefined;
  guid: string | undefined;
  isoDate: string | undefined;
  link: string | undefined;
  pubDate: string | undefined;
  title: string | undefined;
};

export const rssUrl =
  "https://getinvolved.wayne.edu/organization/scd/events.rss";
// export const rssUrl = "https://getinvolved.wayne.edu/organization/student-senate/events.rss"

// export const EventsContext = createContext<{ [key: string]: any }[]>([]);
export const EventsContext = createContext<EventType[]>([]);

export const useEventsContext = () => useContext(EventsContext);
