import Link from "next/link";
import { useSettingsContext } from "~/data/ThemeContext";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Nav: React.FC = () => {
  const { darkTheme, setDarkTheme } = useSettingsContext();

  return (
    <>
      <nav>
        <header
          aria-label="Site Header"
          className="relative mx-auto w-screen max-w-screen-xl px-4 sm:px-6 lg:px-8"
        >
          {/* <div className="mx-auto w-screen max-w-screen-xl px-4 sm:px-6 lg:px-8"> */}
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="text-differenec block" href="/">
                <span className="sr-only">Home</span>
                <img className="h-12 p-[0.0125rem]" src="scd_logo.png" />
              </a>
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
                  <li>
                    <Link
                      className="text-difference transition hover:text-gray-500/75"
                      href="/"
                    >
                      Events
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-difference transition hover:text-gray-500/75"
                      href="/"
                    >
                      Recordings
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-difference transition hover:text-gray-500/75"
                      href="/"
                    >
                      Donate
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <div className="hidden sm:flex">
                    <Link
                      className="text-difference rounded-md px-5 py-2.5 text-sm font-medium outline outline-1"
                      href="/"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </header>
      </nav>
      {/* <nav className="text-difference absolute top-0 right-0 z-[1] w-full px-[1.25rem] py-[0.625rem] text-right">
        <button
          id="toggleDark"
          className="text-difference mr-[1rem] h-[2rem] text-center align-middle"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? <FaToggleOn /> : <FaToggleOff />}
        </button>
        <ul className="inline-flex gap-[1rem] text-right">
          <li>
            <Link href="" className="text-difference">
              Events
            </Link>
          </li>
          <li>
            <Link href="" className="text-difference">
              Recordings
            </Link>
          </li>
          <li>
            <Link href="" className="text-difference">
              Donate
            </Link>
          </li>
          <li>
            <Link href="" className="text-difference">
              Contact
            </Link>
          </li>
        </ul>
      </nav> */}
    </>
  );
};

export default Nav;
