import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import DarkModeContext from "./DarkModeContext";

const DarkModeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode((preVal) => !preVal);
  };

  return (
    <div className="flex items-center gap-x-1.5 text-[11px]">
      <span className="dark:opacity-50">light</span>
      <button className="flex items-center" onClick={toggleDarkMode}>
        <FontAwesomeIcon
          icon={isDarkMode ? faToggleOn : faToggleOff}
          fontSize="25px"
        />
      </button>
      <span className="opacity-70 dark:opacity-100">dark</span>
    </div>
  );
};

export default DarkModeToggle;
