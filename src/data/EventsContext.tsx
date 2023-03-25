import { createContext, useContext } from "react";

export interface EventType {
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
}

export const rssUrl =
  "https://getinvolved.wayne.edu/organization/scd/events.rss";
// export const rssUrl = "https://getinvolved.wayne.edu/organization/student-senate/events.rss"

// export const EventsContext = createContext<{ [key: string]: any }[]>([]);
export const EventsContext = createContext<EventType[]>([]);

export const useEventsContext = () => useContext(EventsContext);

// const [events, setEvents] = useState<EventType[]>([]);

// export function useEventState<T>(initialState: T): [T, (newValue: T) => void] {
//   const [state, setState] = useState<T>(initialState);

//   const updateState = (newValue: T) => {
//     setState(newValue);
//   };

//   return [state, updateState];
// }

// useEffect(() => {
//   async function fetchEvents() {
//     const feed = await new Parser<EventType[]>().parseURL(rssUrl);
//     if (feed.items.length > 0) {
//       const mappedEvents: EventType[] = feed.items.map(
//         (item): EventType => ({
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
//     // "Sorry, No Upcoming Events."
//     fetchEvents();
//   }
// }, []);
