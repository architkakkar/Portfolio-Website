import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = (props) => {
  return (
    <a
      href={props.address.url || `mailto:${props.address.email}`}
      target="_blank"
    >
      <FontAwesomeIcon
        icon={props.iconName}
        fontSize={"18px"}
        className="border-1.5 dark:border-light border-dark rounded-lg p-1.5"
      />
    </a>
  );
};

export default SocialLinks;
