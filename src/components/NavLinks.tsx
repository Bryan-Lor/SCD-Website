import Link from "next/link";

const NavLinks: React.FC<{ className: string; includeContactUs?: boolean }> = ({
  className,
  includeContactUs = true,
}) => {
  return (
    <>
      <li>
        <Link className={className} href="events">
          Events
        </Link>
      </li>

      <li>
        <Link className={className} href="/">
          Recordings
        </Link>
      </li>

      <li>
        <Link
          className={className}
          href="donoguide.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate
        </Link>
      </li>

      {includeContactUs ? (
        <li>
          <Link className={className} href="/">
            Contact Us
          </Link>
        </li>
      ) : null}
    </>
  );
};
export default NavLinks;
