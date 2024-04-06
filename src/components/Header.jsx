import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  function showSidebar() {
    setIsSidebar(true);
  }
  function hideSidebar() {
    setIsSidebar(false);
  }

  return (
    <header className="flex items-center justify-between">
      <nav
        className={`absolute top-0 left-0 flex flex-col w-3/5 h-screen p-5 transition-all duration-500 ease-in-out border-r-2 dark:border-r-light border-r-dark bg-[#ecf4dc] dark:bg-[#121212] gap-y-5 text-xl rounded-r-lg ${
          isSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="px-2 py-1.5 text-xs dark:text-[#f87171] dark:bg-[#f871711a] text-[#ea5b5b] bg-[#f85e5e2f] rounded-md w-fit mb-4"
          onClick={hideSidebar}
        >
          Close
        </button>
        <a
          href="#home"
          className="text-violet-700 hover:underline hover:underline-offset-4"
        >
          01. Home
        </a>
        <a href="#about" className="hover:underline hover:underline-offset-4">
          02. About
        </a>
        <a
          href="#projects"
          className="hover:underline hover:underline-offset-4"
        >
          03. Projects
        </a>
        <a href="#contact" className="hover:underline hover:underline-offset-4">
          04. Contact
        </a>
      </nav>
      <div className="flex items-center justify-center">
        <FontAwesomeIcon
          icon={faBarsStaggered}
          fontSize="26px"
          onClick={showSidebar}
          className="cursor-pointer"
        />
      </div>
      <DarkModeToggle />
    </header>
  );
};

export default Header;
