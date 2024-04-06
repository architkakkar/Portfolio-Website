import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Navbar />
      <DarkModeToggle />
    </header>
  );
};

export default Header;
