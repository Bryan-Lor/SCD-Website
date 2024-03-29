import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";
import { Links } from "~/data/Links";
import NavLinks from "./NavLinks";

const Footer: React.FC<{ className?: string; absolute?: boolean }> = ({
  className = "",
  absolute,
}) => {
  const linkClass = "transition lg:hover:text-gray-400 text-xl lg:text-lg";
  return (
    // <footer aria-label="Site Footer" className={"m-0 w-full p-0 " + className}>
    <footer
      aria-label="Site Footer"
      className={absolute ? "w-full " + className : "w-full " + className}
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:flex lg:max-w-screen-2xl lg:justify-between lg:py-12 lg:px-8">
        <div>
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
        </div>

        <div>
          <nav aria-label="Footer Nav" className="mt-12 lg:mt-3">
            <ul className="text-difference flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 ">
              <NavLinks className={linkClass} />
            </ul>
          </nav>

          <div className="text-difference flex justify-center gap-5 pt-8">
            <SocialMediaLinks />
          </div>
          <div className="text-difference pt-8 text-center text-sm font-thin">
            Copyright &copy; {new Date().getFullYear()} SCD. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
