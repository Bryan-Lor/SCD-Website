import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

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
      <div
        className={
          "flex h-screen w-screen flex-1 " +
          (darkTheme ? "bg-heroDark" : "bg-hero")
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
            Founded in Fall 2021 as Wayne State<span>&#39;</span>s sole Computer
            Science organization, SCD is dedicated to creating opportunities for
            coding and development enthusiasts. Regardless of your background or
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
            alt="Landing-Page Image"
            style={{ margin: "5% 0" }}
          />
        </div>
      </div>
    </>
  );
};
export default Hero;
