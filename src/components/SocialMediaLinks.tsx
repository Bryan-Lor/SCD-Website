import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Links } from "~/data/Links";

const SocialMediaLinks: React.FC = () => {
  const socialMediaLinks = [
    "github",
    "linkedin",
    "instagram",
    "twitter",
    "facebook",
    "youtube",
  ];

  const className: string = "duration-200 hover:scale-125";

  return (
    <>
      <Link href={Links.github} target="_blank" className={className}>
        <FaGithub />
      </Link>
      <Link href={Links.linkedin} target="_blank" className={className}>
        <FaLinkedin />
      </Link>
      <Link href={Links.instagram} target="_blank" className={className}>
        <FaInstagram />
      </Link>
      <Link href={Links.twitter} target="_blank" className={className}>
        <FaTwitter />
      </Link>
      <Link href={Links.facebook} target="_blank" className={className}>
        <FaFacebook />
      </Link>
      <Link href={Links.youtube} target="_blank" className={className}>
        <FaYoutube />
      </Link>
    </>
  );
};

export default SocialMediaLinks;
