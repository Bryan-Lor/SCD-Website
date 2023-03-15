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
import Image from "next/image";
import team from "~/data/team";

const Home: NextPage = () => {
  const [isDark, setDarkMode] = useState(true);

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

      <Hero darkMode={isDark} imgSrc="SCDLanding.webp" />
      <img src="" />
      <Team />
    </>
  );
};

export default Home;

const Hero: React.FC<{ darkMode: boolean; imgSrc?: string }> = ({
  darkMode,
  imgSrc,
}) => {
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
      <div
        className={
          "flex h-screen w-screen flex-1 " +
          (darkMode ? "bg-heroDark" : "bg-hero")
        }
      >
        {/* Left Half*/}
        <div className="flex h-screen w-1/2 flex-col justify-center px-[3.125rem]">
          <div className="text-difference font-bold">
            {/* SEO Header Elements */}
            <h1 className="hidden"> Society of Computer Developers</h1>
            <h2 className="hidden"> WARRIOR STRONG </h2>
            <h1>
              {text}
              <Cursor cursorColor="text-difference" />
            </h1>
          </div>

          <h2 className="pb-6 pt-4 text-green-500">
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

        {/* Right Half*/}
        <div className="w-1/ relative h-screen">
          <img
            src={imgSrc}
            className="relative h-[90%] object-scale-down"
            style={{ margin: "5% 0" }}
          />
        </div>
      </div>
    </>
  );
};

const Team: React.FC = () => {
  return (
    <>
      {/* <div className="relative h-[37.5rem] w-screen flex-col items-center justify-center bg-red-500 align-middle"> */}
      <div className="bg-coe relative w-screen flex-col items-center justify-center pb-12 align-middle">
        <h3 className="relative z-[1] py-4 text-center text-2xl text-white">
          Meet The Team
        </h3>
        <div className="relative z-[1] flex w-full items-center justify-center gap-[2rem] overflow-x-scroll">
          {team.map((person) => (
            <div className="h-[26.875rem] w-[18.75rem] bg-white">
              <Image
                className="h-[18.75rem] w-[18.75rem] object-cover"
                width={300}
                height={300}
                src={person.imgSrc}
                alt={"Picture of SCD " + person.role}
              />
              <div className="p-4 capitalize">
                <h4>
                  <b>{person.firstName}</b> {person.lastName}
                </h4>
                <h5>{person.role}</h5>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-coeShade absolute top-0 left-0 h-full w-full"></div>
      </div>
    </>
  );
};
