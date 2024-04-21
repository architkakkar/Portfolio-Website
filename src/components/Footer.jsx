import React from "react";
import {
  faGithub,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialMediaLinks = [
    {
      id: "1",
      name: "GitHub",
      iconName: faGithub,
      address: {
        email: "",
        url: "https://github.com/architkakkar",
      },
    },
    {
      id: "2",
      name: "X-Twitter",
      iconName: faXTwitter,
      address: {
        email: "",
        url: "https://x.com/_architkakkar",
      },
    },
    {
      id: "3",
      name: "LinkedIn",
      iconName: faLinkedin,
      address: {
        email: "",
        url: "https://www.linkedin.com/in/architkakkar",
      },
    },
    {
      id: "4",
      name: "Email",
      iconName: faEnvelope,
      address: {
        email: "business.architkakkar@gmail.com",
        url: "",
      },
    },
  ];

  return (
    <footer>
      <ul className="flex gap-x-2.5 sm:gap-x-3 items-center justify-center">
        {socialMediaLinks.map((link) => (
          <SocialLinks
            key={link.id}
            name={link.name}
            iconName={link.iconName}
            address={link.address}
          />
        ))}
      </ul>
      <div className="flex flex-col items-center mt-1 sm:mt-1.5 text-xs font-bold text-center font-abeezee dark:font-medium">
        <p>Designed & Build by Archit Kakkar</p>
        <p className="hidden">|</p>
        <p>Copyright @{currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
