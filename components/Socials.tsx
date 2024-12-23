import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

interface SocialLink {
  icon: React.ElementType; // Component type
  path: string;
}

const socialLinks: SocialLink[] = [
  { icon: FaGithub, path: "https://github.com" },
  { icon: FaLinkedinIn, path: "https://linkedin.com" },
  { icon: FaYoutube, path: "https://youtube.com" },
  { icon: FaTwitter, path: "https://twitter.com" },
];

const Socials: React.FC = () => {
  return (
    <div className="flex gap-6">
      {socialLinks.map(({ icon: Icon, path }, index) => (
        <Link key={index} href={path} target="_blank" rel="noopener noreferrer">
          <Icon className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-sm hover:bg-accent hover:text-primary hover:transition-all duration-500 p-2" />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
