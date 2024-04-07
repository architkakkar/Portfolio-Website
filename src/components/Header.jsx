import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <header className="flex items-center justify-between">
      <Navbar
        isSidebar={props.isSidebar}
        show={props.showSidebar}
        hide={props.hideSidebar}
        // setPage={props.setPage}
      />
      <DarkModeToggle />
    </header>
  );
};

export default Header;
