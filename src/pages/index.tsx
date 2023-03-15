import { useSettingsContext } from "~/data/ThemeContext";
import { type NextPage } from "next";
import HeaderTag from "~/components/HeaderTag";
import Nav from "~/components/Nav";
import Hero from "~/components/Hero";
import Team from "~/components/Team";

const Home: NextPage = () => {
  const { darkTheme } = useSettingsContext();

  return (
    <>
      <HeaderTag />
      <section
        className={"h-full w-full " + (darkTheme ? "bg-heroDark" : "bg-hero")}
      >
        <Nav />
        <Hero darkTheme={darkTheme} imgSrc="SCDLanding.webp" />
      </section>
      <Team />
    </>
  );
};

export default Home;
