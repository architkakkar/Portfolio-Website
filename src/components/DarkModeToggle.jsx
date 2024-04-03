import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState();

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode((preVal) => !preVal);
  };

  // Ensure dark mode is applied on initial load if the user has it enabled in their system settings
  useEffect(() => {
    setIsDarkMode(() => {
      const darkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (darkMode) {
        document.documentElement.classList.add("dark");
        return true;
      }

      return false;
    });
  }, []);

  return (
    <div className="flex items-center gap-x-1.5 text-[11px]">
      <span className="dark:opacity-50">light</span>
      <button className="flex items-center" onClick={toggleDarkMode}>
        <FontAwesomeIcon
          icon={isDarkMode ? faToggleOn : faToggleOff}
          fontSize="25px"
        />
      </button>
      <span className="opacity-75 dark:opacity-100">dark</span>
    </div>
  );
};

export default DarkModeToggle;
