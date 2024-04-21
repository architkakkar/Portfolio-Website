import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

  const showSidebar = () => setIsSidebar(true);
  const hideSidebar = () => setIsSidebar(false);

  return (
    <Router>
      <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <div
          className={`w-screen min-h-screen h-full p-5 sm:px-7 pb-4 font-wendy dark:bg-dark text-dark bg-light dark:text-light ${
            isSidebar ? "h-screen overflow-hidden" : ""
          }`}
        >
          <Header
            isSidebar={isSidebar}
            setIsSidebar={setIsSidebar}
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </DarkModeContext.Provider>
    </Router>
  );
}

export default App;
