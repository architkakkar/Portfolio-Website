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
        className={`absolute top-0 left-0 flex flex-col w-3/5 h-screen p-5 transition-all duration-500 ease-in-out border-r-2 dark:border-r-light border-r-dark bg-light dark:bg-dark gap-y-5 text-xl rounded-r-lg ${
          props.isSidebar ? "translate-x-0 z-10" : "-translate-x-full"
        }`}
      >
        <button
          className="px-2 py-1.5 text-xs dark:text-[#f87171] dark:bg-[#f871711a] text-[#ea5b5b] bg-[#f85e5e2f] rounded-md w-fit mb-4"
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
      <div className="flex items-center justify-center">
        <FontAwesomeIcon
          icon={faBarsStaggered}
          fontSize="26px"
          onClick={props.show}
          className="cursor-pointer"
        />
      </div>
    </>
  );
};

export default Navbar;
