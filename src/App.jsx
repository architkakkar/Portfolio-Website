import React, { useEffect, useState } from "react";
import DarkModeContext from "./context/DarkModeContext";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState();
  const [isSidebar, setIsSidebar] = useState(false);
  const [page, setPage] = useState("projects");

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

  function showSidebar() {
    setIsSidebar(true);
  }
  function hideSidebar() {
    setIsSidebar(false);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div
        className={`w-screen h-full p-5 pb-4 font-wendy dark:bg-dark text-dark bg-light dark:text-light ${
          isSidebar ? "h-screen overflow-hidden" : ""
        }`}
      >
        <Header
          isSidebar={isSidebar}
          showSidebar={showSidebar}
          hideSidebar={hideSidebar}
          // setPage={setPage}
        />
        {isSidebar && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80"
            onClick={hideSidebar}
          ></div>
        )}
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "projects" && <Projects />}
        {page === "contact" && <Contact />}
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
