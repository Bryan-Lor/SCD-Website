import Parser from "rss-parser";
import { EventType, rssUrl } from "~/data/EventsContext";

let cachedEvents: EventType[] | null = null;

async function fetchEvents(): Promise<EventType[]> {
  const parser = new Parser<EventType[]>();
  const feed = await parser.parseURL(rssUrl);

  if (feed.items.length > 0) {
    const mappedEvents: EventType[] = feed.items.map(
      (item): EventType => ({
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
      })
    );

    cachedEvents = mappedEvents;
    return mappedEvents;
  }

  return [];
}

export async function getEvents(): Promise<EventType[]> {
  if (cachedEvents) {
    return cachedEvents;
  }

  return fetchEvents();
}
