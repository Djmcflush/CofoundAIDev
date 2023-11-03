import type { IconType } from "react-icons";
import {
  FaDiscord,
  FaFileCode,
  FaGear,
  FaGithub,
  FaHouse,
  FaLinkedin,
  FaQuestion,
  FaXTwitter,
  FaLink,
  FaDownload,
  FaCreditCard,
} from "react-icons/fa6";

type LinkMetadata = {
  name: string;
  href: string;
  icon: IconType;
  className?: string;
};

export const PAGE_LINKS: LinkMetadata[] = [
  {
    name: "Home",
    href: "/",
    icon: FaHouse,
  },
  {
    name: "Templates",
    href: "/templates",
    icon: FaFileCode,
    className: "transition-transform group-hover:scale-110",
  },
  {
    name: "Subscription",
    href: "/subscription",
    icon: FaCreditCard,
    className: "transition-transform group-hover:scale-110",
  },
  {
    name: "Download User Data",
    href: "/data",
    icon: FaDownload,
    className: "transition-transform group-hover:scale-110",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: FaGear,
    className: "transition-transform group-hover:rotate-90",
  },
];

export const SOCIAL_LINKS: LinkMetadata[] = [
  {
    name: "Github",
    href: "https://github.com/djmcflush/CofoundAIProd",
    icon: FaGithub,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Djmcflush",
    icon: FaXTwitter,
  },
  {
    name: "Website",
    href: "https://www.icgnu.xyz/",
    icon: FaLink,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marcus-edwards-a8358311a/",
    icon: FaLinkedin,
  },
];
