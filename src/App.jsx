import React, { useState } from "react";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import Footer from "./components/Footer";

function App() {
  const [isSidebar, setIsSidebar] = useState(false);

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
      />
      {isSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80"
          onClick={hideSidebar}
        ></div>
      )}
      <HomeSection />
      <Footer />
    </div>
  );
}

export default App;
