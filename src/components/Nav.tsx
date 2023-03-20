import Link from "next/link";
import { useSettingsContext } from "~/data/ThemeContext";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import NavLinks from "./NavLinks";

const Nav: React.FC = () => {
  const { darkTheme, setDarkTheme } = useSettingsContext();

  const linkClass =
    "transition " +
    (darkTheme
      ? "text-difference hover:text-gray-400"
      : "mix-blend-normal hover:text-gray-600");

  return (
    <>
      <nav>
        <header
          aria-label="Site Header"
          className="relative mx-auto w-full px-4 sm:max-w-screen-sm sm:px-6 md:max-w-screen-md lg:max-w-screen-xl lg:px-8"
        >
          <div className="flex h-16 items-center justify-between">
            <Link
              className="text-differenec md:flex md:items-center md:gap-12"
              href="/"
            >
              <span className="sr-only">Home</span>
              <img
                className="h-12 p-[0.0125rem]"
                src="scd_logo.png"
                alt="SCD Logo"
              />
            </Link>

            <div className="flex-1" />

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <button
                      id="toggleDark"
                      className="text-difference mr-[1rem] h-[2rem] text-center align-middle text-lg"
                      onClick={() => setDarkTheme(!darkTheme)}
                    >
                      {darkTheme ? <FaToggleOn /> : <FaToggleOff />}
                    </button>
                  </li>
                  <NavLinks className={linkClass} includeContactUs={false} />
                  <li>
                    <Link
                      className={
                        "rounded-md px-5 py-2.5 text-sm font-medium outline outline-1 transition " +
                        (darkTheme
                          ? "text-difference hover:text-gray-400"
                          : "mix-blend-normal hover:text-gray-600")
                      }
                      href="/"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Hambuger Menu */}
              {/* <div className="block md:hidden"> */}
              <div className="fixed top-2 right-5 z-50 block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 mix-blend-difference shadow-md transition hover:text-gray-600/75">
                  <MdMenu />
                </button>
              </div>
            </div>
          </div>
        </header>
      </nav>
    </>
  );
};

export default Nav;
