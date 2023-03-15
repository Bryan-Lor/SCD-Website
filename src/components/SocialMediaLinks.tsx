import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SocialMediaLinks: React.FC = () => {
  return (
    <>
      <Link href="" className="duration-200 hover:scale-110">
        <FaGithub />
      </Link>
      <Link href="" className="duration-200 hover:scale-110">
        <FaInstagram />
      </Link>
      <Link href="" className="duration-200 hover:scale-110">
        <FaTwitter />
      </Link>
      <Link href="" className="duration-200 hover:scale-110">
        <FaFacebook />
      </Link>
      <Link href="" className="duration-200 hover:scale-110">
        <FaYoutube />
      </Link>
    </>
  );
};

export default SocialMediaLinks;
