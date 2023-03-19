import Link from "next/link";
import { useSettingsContext } from "~/data/ThemeContext";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import NavLinks from "./NavLinks";

const Nav: React.FC<{ className?: string }> = ({ className }) => {
  const { darkTheme, setDarkTheme } = useSettingsContext();

  const linkClass =
    "transition " +
    (darkTheme
      ? "text-difference hover:text-gray-400"
      : "mix-blend-normal hover:text-white");

  return (
    <>
      <nav className={className}>
        <header
          aria-label="Site Header"
          className="relative mx-auto w-full px-4 sm:max-w-screen-sm sm:px-6 md:max-w-screen-md lg:max-w-screen-xl lg:px-8"
        >
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="text-differenec block" href="/">
                <span className="sr-only">Home</span>
                <img
                  className="h-12 p-[0.0125rem]"
                  src="scd_logo.png"
                  alt="SCD Logo"
                />
              </Link>
            </div>

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
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <div className="hidden sm:flex">
                    <Link
                      className={
                        "rounded-md px-5 py-2.5 text-sm font-medium outline outline-1 transition " +
                        (darkTheme
                          ? "text-difference hover:text-gray-400"
                          : "mix-blend-normal hover:text-white")
                      }
                      href="/"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 mix-blend-difference transition hover:text-gray-600/75">
                    <MdMenu />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </nav>
    </>
  );
};

export default Nav;
