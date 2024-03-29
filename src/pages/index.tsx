import { useThemeContext } from "~/data/ThemeContext";
import { type NextPage } from "next";
import HeaderTag from "~/components/HeaderTag";
import Nav from "~/components/Nav";
import Hero from "~/components/Hero";
import Footer from "~/components/Footer";
import Gallery from "~/components/Gallery";
import Team from "~/components/Team";
import EventPreview from "~/components/EventPreview";

const Home: NextPage = () => {
  const { darkTheme } = useThemeContext();

  return (
    <>
      <HeaderTag />
      <div className={darkTheme ? "bg-heroDark" : "bg-hero"}>
        <Nav />
        <main>
          <Hero />
          <Team darkTheme={darkTheme} />
          <EventPreview />
          <Gallery />
        </main>
        <Footer className="mx-auto lg:max-w-screen-xl" />
      </div>
    </>
  );
};

export default Home;
