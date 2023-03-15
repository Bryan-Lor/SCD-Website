import Link from "next/link";
import { useSettingsContext } from "~/data/ThemeContext";

const Nav: React.FC = () => {
  const { darkTheme, setDarkTheme } = useSettingsContext();

  return (
    <>
      <nav className="text-difference  absolute top-0 right-0 z-[1] w-full px-[1.25rem] py-[0.625rem] text-right">
        <button
          id="toggleDark"
          className="text-difference mr-[1rem]"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          Toggle
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
      </nav>
    </>
  );
};

export default Nav;
