import { createContext, useContext } from "react";

// export type EventType = {
//   author: string;
//   categories: string[];
//   content: string;
//   contentSnippet: string;
//   creator: string;
//   enclosure: { url: string };
//   guid: string;
//   isoDate: string;
//   link: string;
//   pubDate: string;
//   title: string;
// };

export const rssUrl =
  "https://getinvolved.wayne.edu/organization/scd/events.rss";
// export const rssUrl = "https://getinvolved.wayne.edu/organization/student-senate/events.rss"

export const EventsContext = createContext<{ [key: string]: any }[]>([]);

export const useEventsContext = () => useContext(EventsContext);
