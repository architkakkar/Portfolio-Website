import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = (props) => {
  return (
    <li>
      <a
        href={props.address.url || `mailto:${props.address.email}`}
        target="_blank"
      >
        <FontAwesomeIcon
          icon={props.iconName}
          fontSize={"20px"}
          className="border-1.5 dark:border-light border-dark rounded-lg p-1.25 xs:p-1.5 sm:w-[22px] sm:h-[22px] 3xl:w-7 3xl:h-7 hover:dark:border-dark hover:dark:bg-light hover:dark:text-dark hover:border-light hover:bg-dark hover:text-light"
        />
      </a>
    </li>
  );
};

export default SocialLinks;
