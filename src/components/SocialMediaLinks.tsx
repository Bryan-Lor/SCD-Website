import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SocialMediaLinks: React.FC = () => {
  return (
    <>
      <Link
        href={Links.github}
        target="_blank"
        className="duration-200 hover:scale-110"
      >
        <FaGithub />
      </Link>
      <Link
        href={Links.linkedin}
        target="_blank"
        className="duration-200 hover:scale-110"
      >
        <FaLinkedin />
      </Link>
      <Link
        href={Links.instagram}
        target="_blank"
        className="duration-200 hover:scale-110"
      >
        <FaInstagram />
      </Link>
      <Link
        href={Links.twitter}
        target="_blank"
        className="duration-200 hover:scale-110"
      >
        <FaTwitter />
      </Link>
      <Link
        href={Links.facebook}
        target="_blank"
        className="duration-200 hover:scale-110"
      >
        <FaFacebook />
      </Link>
      <Link
        href={Links.youtube}
        target="_blank"
        className="duration-200 hover:scale-110"
      >
        <FaYoutube />
      </Link>
    </>
  );
};

export const Links = {
  scd: "https://getinvolved.wayne.edu/organization/scd",
  github: "https://github.com/WSU-Society-of-Computer-Developers",
  linkedin: "https://www.linkedin.com/company/society-of-computer-developers/",
  facebook: "https://www.facebook.com/scdwsu",
  twitter: "https://twitter.com/scd_wsu",
  instagram: "https://www.instagram.com/scd_wsu/",
  youtube: "https://www.youtube.com/channel/UCAdfexlccMiFANIx6WE4CrQ",
  email: "waynestatescd@gmail.com",
  wayne: "https://wayne.edu/",
  githubPage: "https://github.com/Bryan-Lor/SCD-Website",
};

export default SocialMediaLinks;
