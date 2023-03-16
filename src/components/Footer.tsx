import Link from "next/link";
import SocialMediaLinks, { Links } from "./SocialMediaLinks";

const Footer: React.FC = () => {
  return (
    <footer aria-label="Site Footer" className={"m-0 w-full bg-heroDark p-0"}>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Link href={Links.scd} target="_blank">
            <img className="h-24" src="scd_logo.png" alt="SCD Logo" />
          </Link>
          <Link href={Links.wayne} target="_blank">
            <img
              className="h-20 self-center align-middle"
              // src="https://mac.wayne.edu/images/engineering_stacked_color.png" // Stacked WSU Engineering Banner
              // src="https://mac.wayne.edu/images/engineering_horz_color.png" // Horizontal WSU Stacked Engineering Banner
              // src="https://mac.wayne.edu/images/wsu_primary_horz_fnol_color.png" //Horizontal WSU Banner
              src="https://mac.wayne.edu/images/shield_only_color.png" // WSU Shield
              alt="SCD Logo"
            />
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400 mix-blend-difference">
          Society of Computer Developers.
          <br />
          Wayne State University, College of Engineering.
        </p>

        <nav aria-label="Footer Nav" className="mt-12">
          <ul className="text-difference flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 ">
            <li>
              <Link className="transition hover:text-gray-400" href="/">
                Events
              </Link>
            </li>

            <li>
              <Link className=" transition hover:text-gray-400" href="/">
                Recordings
              </Link>
            </li>

            <li>
              <Link className="transition hover:text-gray-400" href="/">
                History
              </Link>
            </li>

            <li>
              <Link className="transition hover:text-gray-400" href="/">
                Donate
              </Link>
            </li>

            <li>
              <Link className="transition hover:text-gray-400" href="/">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-difference flex justify-center gap-5 pt-8">
          <SocialMediaLinks />
        </div>
        <div className="text-difference pt-8 text-center text-sm font-thin">
          Copyright &copy; 2023 SCD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
