import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer aria-label="Site Footer" className={"w-full bg-heroDark"}>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <img className="h-24" src="scd_logo.png" alt="SCD Logo" />
          <img
            className="h-20 self-center align-middle"
            // src="https://mac.wayne.edu/images/engineering_stacked_color.png" // Stacked WSU Engineering Banner
            // src="https://mac.wayne.edu/images/engineering_horz_color.png" // Horizontal WSU Stacked Engineering Banner
            // src="https://mac.wayne.edu/images/wsu_primary_horz_fnol_color.png" //Horizontal WSU Banner
            src="https://mac.wayne.edu/images/shield_only_color.png" // WSU Shield
            alt="SCD Logo"
          />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400">
          Society of Computer Developers.
          <br />
          Wayne State University, College of Engineering.
        </p>

        <nav aria-label="Footer Nav" className="mt-12">
          <ul className="text-difference flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 ">
            <li>
              <Link className="transition hover:text-gray-400" href="/">
                About
              </Link>
            </li>

            <li>
              <Link className=" transition hover:text-gray-400" href="/">
                Careers
              </Link>
            </li>

            <li>
              <Link className="transition hover:text-gray-400" href="/">
                History
              </Link>
            </li>

            <li>
              <Link className="transition hover:text-gray-400" href="/">
                Services
              </Link>
            </li>

            <li>
              <Link className="transition hover:text-gray-400" href="/">
                Projects
              </Link>
            </li>

            <li>
              <Link className="transition hover:text-gray-400" href="/">
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="text-difference mt-12 flex h-[1.5rem] justify-center gap-6 md:gap-8">
          <li>
            <Link
              href="/"
              rel="noreferrer"
              target="_blank"
              className="duration-100 hover:scale-110 hover:text-3xl hover:text-gray-400"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook />
            </Link>
          </li>

          <li>
            <Link
              href="/"
              rel="noreferrer"
              target="_blank"
              className="duration-100 hover:scale-110 hover:text-3xl hover:text-gray-400"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram />
            </Link>
          </li>

          <li>
            <Link
              href="/"
              rel="noreferrer"
              target="_blank"
              className="duration-100 hover:scale-110 hover:text-3xl hover:text-gray-400"
            >
              <span className="sr-only">Twitter</span>
              <FaTwitter />
            </Link>
          </li>

          <li>
            <Link
              href="/"
              rel="noreferrer"
              target="_blank"
              className="duration-100 hover:scale-110 hover:text-3xl hover:text-gray-400"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
