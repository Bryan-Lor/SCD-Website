import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

const Hero: React.FC<{ darkTheme: boolean; imgSrc?: string }> = ({
  darkTheme,
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
      <div className="container mx-auto flex max-w-screen-xl flex-col justify-center p-6 sm:py-12 lg:flex-row lg:justify-between lg:py-24">
        <div className="flex flex-col justify-center rounded-sm p-6 text-center lg:max-w-[50%] lg:text-left">
          {/* SEO Header Elements */}
          <h1 className="hidden"> Society of Computer Developers</h1>
          <h2 className="hidden"> WARRIOR STRONG </h2>
          {/* Typewriter */}
          <h1>
            {text}
            <Cursor cursorColor="text-difference" />
          </h1>
          <h2 className="pb-4 text-green-500">
            Wayne State College of Engineering
          </h2>
          <p className="text-difference pb-6">
            Founded in Fall 2021 as Wayne State<span>&#39;</span>s sole Computer
            Science organization, SCD is <b>dedicated to creating </b>
            opportunities for coding and development enthusiasts.{" "}
            <b> Regardless of your experience </b> or background in CS, we
            foster a<b> supportive community </b> that helps members with{" "}
            <b>coding</b>, <b>resume building</b>, <b>networking</b>, and{" "}
            <b>skill development</b>.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="rounded bg-yellowGrad px-8 py-2 text-base text-white"
            >
              Join Today
            </Link>
            <Link
              rel="noopener noreferrer"
              href="#"
              className="text-difference rounded px-8 py-3 text-base"
            >
              View GitHub
            </Link>
          </div>
        </div>
        <div className="mt-8 flex h-72 items-center justify-center p-6 sm:h-80 lg:mt-0 lg:h-fit">
          <img
            src="SCDLanding.webp"
            alt="Abstract Landing Page Art"
            className="xl:h-112 2xl:h-128 h-72 object-contain sm:h-80 lg:h-96"
          />
        </div>
      </div>
    </>
  );
};
export default Hero;
