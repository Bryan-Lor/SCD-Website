import { type NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import HeaderTag from "~/components/HeaderTag";
import Nav from "~/components/Nav";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Home: NextPage = () => {
  const [isDark, setDarkMode] = useState(true);
  // const [text] = useTypewriter({
  //   words: [
  //     "WARRIOR STRONG",
  //     // "We are all born to succeed",
  //     "Society of Computer Developers",
  //   ],
  //   loop: false,
  //   delaySpeed: 3500,
  //   typeSpeed: 100,
  // });

  return (
    <>
      <HeaderTag />
      <Nav />

      <button
        id="toggleDark"
        className="z-3 text-difference absolute top-0 left-0 "
        onClick={() => {
          setDarkMode((current) => !current);
        }}
      >
        Toggle
      </button>

      {/* Hero Section */}
      <Hero darkMode={isDark} />
    </>
  );
};

export default Home;

const Hero: React.FC = ({ darkMode }) => {
  const [text] = useTypewriter({
    words: [
      "WARRIOR STRONG",
      // "We are all born to succeed",
      "Society of Computer Developers",
    ],
    loop: false,
    delaySpeed: 3500,
    typeSpeed: 100,
  });

  return (
    <>
      {/* Hero Section */}
      <div
        className={
          "flex h-full w-full flex-1 " + (darkMode ? "bg-heroDark" : "bg-hero")
        }
      >
        {/* Left */}
        <div className="flex h-full w-1/2 flex-col justify-center px-[3.125rem]">
          <div className="text-difference text-5xl font-bold">
            <h1>
              {/* Span is there to render out an H1 Title for SEO, on load the website will use the typewriter text instead */}
              {!text ? (
                <span className="hidden">Society of Computer Developers</span>
              ) : (
                text
              )}
              <Cursor cursorColor="text-difference" />
            </h1>
          </div>

          <h2 className="pb-6 text-3xl text-green-500">
            Wayne State College of Engineering
          </h2>
          <p className="text-difference pb-6">
            Founded in Fall 2021 as Wayne State's sole Computer Science
            organization, SCD is dedicated to creating opportunities for coding
            and development enthusiasts. Regardless of your background or
            experience in CS, we foster a supportive community that helps
            members with coding, resume building, networking, and skill
            development.
          </p>
          <div className="flex justify-center">
            <button className="w-[23.75rem] rounded-xl bg-yellowGrad py-1 px-6 text-white duration-[250ms]">
              Join Today!
            </button>
          </div>
          <div className="text-difference flex h-6 items-center justify-center gap-6 py-8 text-center align-middle text-2xl">
            <Link href="" className="duration-200 hover:text-3xl">
              <FaGithub />
            </Link>
            <Link href="" className="duration-200 hover:text-3xl">
              <FaInstagram />
            </Link>
            <Link href="" className="duration-200 hover:text-3xl">
              <FaTwitter />
            </Link>
            <Link href="" className="duration-200 hover:text-3xl">
              <FaFacebook />
            </Link>
            <Link href="" className="duration-200 hover:text-3xl">
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="w-1/ h-full">
          <img
            src="SCDLanding.webp"
            className="h-[90%] w-auto"
            style={{ margin: "5% 0" }}
          />
        </div>
      </div>
    </>
  );
};
