import { useSettingsContext } from "~/data/ThemeContext";
import { type NextPage } from "next";
import HeaderTag from "~/components/HeaderTag";
import Nav from "~/components/Nav";
import Hero from "~/components/Hero";
import Footer from "~/components/Footer";
import Gallery from "~/components/Gallery";
import Team from "~/components/Team";
import EventPreview from "~/components/EventPreview";

const Events: NextPage = () => {
  const { darkTheme } = useSettingsContext();

  return (
    <>
      <HeaderTag />
      <main className="h-full w-full">
        <div
          className={"h-full w-full " + (darkTheme ? "bg-heroDark" : "bg-hero")}
        >
          TEST
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Events;
