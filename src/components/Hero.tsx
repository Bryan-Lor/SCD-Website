import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import SocialMediaLinks from "./SocialMediaLinks";
import { Links } from "~/data/Links";

const Hero: React.FC = () => {
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
          <h1 className="sr-only"> Society of Computer Developers</h1>
          <h2 className="sr-only"> WARRIOR STRONG </h2>
          {/* Typewriter */}
          <h1 className="text-difference flex items-start sm:h-[9rem] sm:items-end lg:h-auto">
            <span className="w-full sm:text-center lg:text-start">
              {text}
              <Cursor cursorColor="text-difference" />
            </span>
          </h1>
          <Link href={Links.wayne} target="_blank">
            <h2
              className={
                "bg-gradient-to-t from-green-900  to-green-500 bg-clip-text pb-4 text-transparent"
              }
            >
              Wayne State College of Engineering
            </h2>
          </Link>
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
              href={Links.scd}
              className="rounded bg-yellowGrad px-8 py-2 text-base text-white duration-200 hover:scale-105"
            >
              Join Today
            </Link>
            <Link
              rel="noopener noreferrer"
              href={Links.githubPage}
              className="text-difference rounded px-8 py-3 text-base duration-200 hover:text-gray-400"
            >
              View GitHub
            </Link>
          </div>
          <div className="text-difference flex justify-center gap-4 pt-8 sm:align-middle lg:justify-start lg:pt-16">
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

// Original paragraph description (Without Bolded Key Phrases)
/* Founded in Fall 2021 as Wayne State<span>&#39;</span>s sole Computer
Science organization, SCD is dedicated to creating opportunities for
coding and development enthusiasts. Regardless of your experience or
background in CS, we foster a supportive community that helps
members with coding, resume building, networking, and skill
development. */
