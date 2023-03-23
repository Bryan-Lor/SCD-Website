import { createContext, useContext } from "react";

export type EventType = {
  author: string;
  categories: string[];
  content: string;
  contentSnippet: string;
  creator: string;
  enclosure: { url: string };
  guid: string;
  isoDate: string;
  link: string;
  pubDate: string;
  title: string;

  // author: any;
  // categories: any;
  // content: any;
  // contentSnippet: any;
  // creator: any;
  // enclosure: any;
  // guid: any;
  // isoDate: any;
  // link: any;
  // pubDate: any;
  // title: any;
};

export const rssUrl =
  "https://getinvolved.wayne.edu/organization/scd/events.rss";
// export const rssUrl = "https://getinvolved.wayne.edu/organization/student-senate/events.rss"

export const EventsContext = createContext<{ [key: string]: any }[]>([]);
// export const EventsContext = createContext<EventType[]>([]);

export const useEventsContext = () => useContext(EventsContext);
