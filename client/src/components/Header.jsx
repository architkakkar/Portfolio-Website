import React from "react";
import Navbar from "./Navbar";
import DarkModeToggle from "./DarkModeToggle";

const Header = (props) => {
  return (
    <header className="flex items-center justify-between">
      <Navbar
        isSidebar={props.isSidebar}
        setIsSidebar={props.setIsSidebar}
        show={props.showSidebar}
        hide={props.hideSidebar}
      />
      <DarkModeToggle />
    </header>
  );
};

export default Header;
