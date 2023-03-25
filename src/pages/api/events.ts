import { NextApiRequest, NextApiResponse } from "next";
import Parser from "rss-parser";
import { rssUrl } from "~/data/EventsContext";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const feed = await new Parser().parseURL(rssUrl);
  const mappedEvents = feed.items.map((item) => ({
    // author: item.author,
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
  res.status(200).json(mappedEvents);
}
