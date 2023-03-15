import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import SocialMediaLinks from "./SocialMediaLinks";

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
      <section className="container mx-auto flex max-w-screen-xl flex-col justify-center p-6 sm:py-12 lg:flex-row lg:justify-between lg:py-24">
        <div className="flex flex-col justify-center rounded-sm p-6 text-center lg:max-w-[50%] lg:text-left">
          {/* SEO Header Elements */}
          <h1 className="hidden"> Society of Computer Developers</h1>
          <h2 className="hidden"> WARRIOR STRONG </h2>
          {/* Typewriter */}
          <h1 className="text-difference">
            {text}
            <Cursor cursorColor="text-difference" />
          </h1>
          <h2
            className={
              "pb-4 " + (darkTheme ? "text-green-500" : "text-green-700")
            }
          >
            Wayne State College of Engineering
          </h2>
          {/* <p className="text-difference pb-6">
            Founded in Fall 2021 as Wayne State<span>&#39;</span>s sole Computer
            Science organization, SCD is dedicated to creating opportunities for
            coding and development enthusiasts. Regardless of your experience or
            background in CS, we foster a supportive community that helps
            members with coding, resume building, networking, and skill
            development.
          </p> */}
          <p className="text-difference pb-6">
            Founded in Fall 2021 as Wayne State<span>&#39;</span>s sole Computer
            Science organization, SCD is
            <b className="font-semibold">
              {" "}
              dedicated to creating opportunities{" "}
            </b>
            for coding and development enthusiasts.
            <b className="font-semibold"> Regardless of your experience </b>
            or background in CS, we foster a
            <b className="font-semibold"> supportive community </b>
            that helps members with
            <b className="font-semibold"> coding</b>,
            <b className="font-semibold"> resume building</b>,
            <b className="font-semibold"> networking</b>, and
            <b className="font-semibold"> skill development</b>.
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
          <div className="text-difference flex justify-center gap-4 pt-8 sm:align-middle lg:justify-start lg:pt-16">
            {/* <Link href="" className="duration-200 hover:scale-110">
              <FaGithub />
            </Link>
            <Link href="" className="duration-200 hover:scale-110">
              <FaInstagram />
            </Link>
            <Link href="" className="duration-200 hover:scale-110">
              <FaTwitter />
            </Link>
            <Link href="" className="duration-200 hover:scale-110">
              <FaFacebook />
            </Link>
            <Link href="" className="duration-200 hover:scale-110">
              <FaYoutube />
            </Link> */}
            <SocialMediaLinks />
          </div>
        </div>
        <div className="mt-8 flex h-72 items-center justify-center p-6 sm:h-80 lg:mt-0 lg:h-fit">
          <img
            src="SCDLanding.webp"
            alt="Abstract Landing Page Art"
            className="xl:h-112 2xl:h-128 h-72 object-contain sm:h-80 lg:h-96"
          />
        </div>
      </section>
    </>
  );
};
export default Hero;
