import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faToggleOn } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  function showSidebar() {
    setIsSidebar(true);
  }

  function hideSidebar() {
    setIsSidebar(false);
  }

  return (
    <nav className="flex items-center justify-between">
      <aside
        className={`absolute top-0 left-0 flex flex-col w-3/5 h-screen p-5 transition-all duration-500 ease-in-out border-r border-r-light bg-[#121212] gap-y-5 text-xl rounded-lg ${
          isSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="px-1.5 py-1 text-sm text-[#f87171] bg-[#f871711a] rounded-md w-fit mb-4"
          onClick={hideSidebar}
        >
          Close
        </button>
        <a href="#home" className="text-violet-700">
          01. Home
        </a>
        <a href="#about" className="">
          02. About
        </a>
        <a href="#projects" className="">
          03. Projects
        </a>
        <a href="#contact" className="">
          04. Contact
        </a>
      </aside>
      <div className="flex items-center justify-center">
        <FontAwesomeIcon
          icon={faBarsStaggered}
          fontSize="28px"
          onClick={showSidebar}
          className="cursor-pointer"
        />
      </div>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
