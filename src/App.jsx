import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isSidebar, setIsSidebar] = useState(false);
  const [page, setPage] = useState("projects");

  function showSidebar() {
    setIsSidebar(true);
  }
  function hideSidebar() {
    setIsSidebar(false);
  }

  return (
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
  );
}

export default App;
