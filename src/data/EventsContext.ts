// import { NextApiRequest, NextApiResponse } from "next";
import { createContext, useContext } from "react";
// import Parser from "rss-parser";

export type EventType = {
  author: string | undefined;
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

export const EventsContext = createContext<EventType[]>([]);

export const useEventsContext = () => useContext(EventsContext);

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const feed = await new Parser().parseURL(rssUrl);
//   const mappedEvents = feed.items.map((item) => ({
//     author: item.author,
//     categories: item.categories,
//     content: item.content,
//     contentSnippet: item.contentSnippet,
//     creator: item.creator,
//     enclosure: item.enclosure,
//     guid: item.guid,
//     isoDate: item.isoDate,
//     link: item.link,
//     pubDate: item.pubDate,
//     title: item.title,
//   }));
//   res.status(200).json(mappedEvents);
// }
