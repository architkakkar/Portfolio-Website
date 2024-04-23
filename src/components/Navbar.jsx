import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const location = useLocation();

  useEffect(() => {
    props.setIsSidebar(false);
  }, [location]);

  return (
    <>
      <nav
        className={`absolute md:relative top-0 left-0 flex flex-col  md:flex-row w-3/5 xxs:w-1/2 xs:w-2/5 md:w-auto h-screen md:h-auto p-5 sm:px-7 md:p-0 transition-all duration-500 ease-in-out md:transition-none border-r-2 dark:border-r-light border-r-dark md:border-none bg-light dark:bg-dark md:bg-none gap-y-5 sm:gap-y-6 md:gap-y-0 md:gap-x-8 text-xl md:text-base rounded-r-lg md:rounded-none ${
          props.isSidebar
            ? "translate-x-0 z-10"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        <button
          className="px-2 py-1.5 sm:px-2.5 sm:py-2 text-xs dark:text-[#f87171] dark:bg-[#f871711a] text-[#ea5b5b] bg-[#f85e5e2f] rounded-md w-fit mb-4 border-1.5 border-transparent hover:border-[#ea5b5b] md:hidden"
          onClick={props.hide}
        >
          Close
        </button>
        <Link
          to="/"
          className={`hover:underline hover:underline-offset-4 ${
            location.pathname === "/" ? "text-violet-700" : ""
          }`}
        >
          01. Home
        </Link>
        <Link
          to="/about"
          className={`hover:underline hover:underline-offset-4 ${
            location.pathname === "/about" ? "text-violet-700" : ""
          }`}
        >
          02. About
        </Link>
        <Link
          to="/projects"
          className={`hover:underline hover:underline-offset-4 ${
            location.pathname === "/projects" ? "text-violet-700" : ""
          }`}
        >
          03. Projects
        </Link>
        <Link
          to="/contact"
          className={`hover:underline hover:underline-offset-4 ${
            location.pathname === "/contact" ? "text-violet-700" : ""
          }`}
        >
          04. Contact
        </Link>
      </nav>
      <div className="flex items-center justify-center md:hidden">
        <FontAwesomeIcon
          icon={faBarsStaggered}
          fontSize="26px"
          onClick={props.show}
          className="cursor-pointer sm:w-7 sm:h-7"
        />
      </div>
    </>
  );
};

export default Navbar;
