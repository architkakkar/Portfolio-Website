import React from "react";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-dvw h-full p-5 pb-4 font-wendy dark:bg-dark text-dark bg-light dark:text-light">
      <Header />
      <HomeSection />
      <Footer />
    </div>
  );
}

export default App;
