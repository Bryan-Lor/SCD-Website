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
        <main>TEST</main>
      </div>
      <Footer />
    </>
  );
};

export default Events;
