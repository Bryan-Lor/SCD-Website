import { useSettingsContext } from "~/data/ThemeContext";
import { type NextPage } from "next";
import HeaderTag from "~/components/HeaderTag";
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";
import { useEffect, useState } from "react";
import Parser from "rss-parser";
import Link from "next/link";

const Events: NextPage = () => {
  const { darkTheme } = useSettingsContext();

  const [events, setEvents] = useState<any[]>([]);
  useEffect(() => {
    async function runFetch() {
      let url = "https://getinvolved.wayne.edu/organization/scd/events.rss";
      // let url = "https://getinvolved.wayne.edu/organization/student-senate/events.rss"
      const feed = await new Parser().parseURL(url);
      if (feed.items.length > 0) setEvents(feed.items);
      // console.log("FEED:", feed.items);
    }
    runFetch();
  }, []);

  return (
    <>
      <HeaderTag />
      <div
        className={"min-h-screen " + (darkTheme ? "bg-heroDark" : "bg-hero")}
      >
        <Nav />
        <main className="flex h-full w-full justify-center align-middle">
          <div className="flex max-w-screen-sm flex-col gap-6 overflow-y-auto py-4 px-6 md:max-w-screen-md lg:max-w-screen-xl lg:px-6">
            <div className="text-difference flex flex-col items-center justify-center align-middle">
              <h2 className="text-4xl">Upcoming Events</h2>
              <div className="h-0.5 w-72 bg-white" />
            </div>
            {events.length > 0 ? (
              events.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  desc={event.contentSnippet}
                  link={event.link}
                  image={event.enclosure.url}
                />
              ))
            ) : (
              <p className="text-white">No Upcoming Events.</p>
            )}
          </div>
        </main>
        <Footer className="mx-auto lg:max-w-screen-xl" />
      </div>
    </>
  );
};

export default Events;

const EventCard: React.FC<{
  title: string;
  desc: string;
  link: string;
  image: string;
}> = ({ title, desc, link, image }) => {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-md lg:flex-row">
      <div className="flex w-full flex-col items-center justify-center bg-blue-600 text-center align-middle text-white lg:w-2/12">
        {/* <p className="text-2xl font-bold">24</p>
        <p>Sept</p> */}
        <img
          src={image}
          className="h-full w-full bg-red-500 object-cover object-center"
        />
      </div>
      <div className="flex flex-1 flex-col bg-white p-4">
        <div className="text-black">
          <h2>{title}</h2>
          <hr />
          <p className="text-base">{desc.replace(title, "")}</p>
        </div>
        <div className="text-right">
          <Link
            href={link}
            className="rounded bg-yellowGrad py-2 px-8 text-base text-white"
          >
            RSVP
          </Link>
        </div>
      </div>
    </div>
  );
};
