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
        <Link className={className} href="/">
          History
        </Link>
      </li>

      <li>
        <Link className={className} href="/">
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
