import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import DarkModeContext from "../context/DarkModeContext";

const DarkModeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode((preVal) => !preVal);
  };

  return (
    <div className="flex items-center gap-x-1.5 sm:gap-x-2 3xl:gap-x-2.5 text-[11px] sm:text-xs xl:text-[13px] 3xl:text-base">
      <span className="dark:opacity-50">light</span>
      <button className="flex items-center" onClick={toggleDarkMode}>
        <FontAwesomeIcon
          icon={isDarkMode ? faToggleOn : faToggleOff}
          fontSize="25px"
          className="sm:h-7 3xl:h-8"
        />
      </button>
      <span className="opacity-70 dark:opacity-100">dark</span>
    </div>
  );
};

export default DarkModeToggle;
