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
      <Nav />
      <Hero darkTheme={darkTheme} imgSrc="SCDLanding.webp" />
      <Team />
    </>
  );
};

export default Home;
