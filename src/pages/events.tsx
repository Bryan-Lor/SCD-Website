import { useSettingsContext } from "~/data/ThemeContext";
import { type NextPage } from "next";
import HeaderTag from "~/components/HeaderTag";
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";

const Events: NextPage = () => {
  const { darkTheme } = useSettingsContext();

  return (
    <>
      <HeaderTag />
      <div
        className={"h-full w-full " + (darkTheme ? "bg-heroDark" : "bg-hero")}
      >
        <Nav />
        <main className="flex h-full w-full items-center justify-center align-middle">
          <div className="flex max-w-screen-sm flex-col gap-6 overflow-y-auto py-4 px-6 md:max-w-screen-md lg:max-w-screen-xl lg:px-6">
            <div className="flex flex-col items-center justify-center align-middle text-white">
              <h2 className="text-4xl">Upcoming Events</h2>
              <hr className="w-72" />
            </div>
            <EventCard />
            <EventCard />
          </div>
        </main>
        <Footer className="mx-auto lg:max-w-screen-xl" />
      </div>
    </>
  );
};

export default Events;

const EventCard: React.FC = () => {
  return (
    <div className="flex w-full">
      <div className="flex w-2/12 flex-col items-center justify-center rounded-l-md bg-blue-600 p-8 text-center align-middle text-white">
        <p className="text-2xl font-bold">24</p>
        <p>Sept</p>
      </div>
      <div className="flex flex-1 flex-col rounded-r-md bg-white p-4">
        <div className="text-black">
          <h2>SCD Game Night</h2>
          <hr />
          <p className="text-base">
            SCD Game Night Join SCD for game night! We’re hosting a game night
            on Friday, March 31 from 6-9 PM in the Student Center! Come take a
            break after class and play some video, board, and table games with
            us! We will supply some board games, but you are more than welcome
            to bring your own! BYO Nintendo Switch Controller, if you are able
            to. Food will be provided, please RSVP so we can plan accordingly
          </p>
        </div>
        <div className="text-right">
          <button className="rounded bg-black py-2 px-8 text-base text-white">
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
};
