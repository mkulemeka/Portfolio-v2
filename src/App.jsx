import "./styles/App.scss";

import { About, Contact, Home, Projects } from "./pages";
import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components";
import { useState } from "react";

const App = () => {
  const location = useLocation();
  //determine current active link
  const [active, setActive] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section
      className={`${
        isDarkMode ? "bg-fadedBlack" : "bg-whitey"
      } flex min-h-[100vh] text-white text-regular font-poppins transition ease duration-300`}
    >
      <Navbar className="mobile_nav"
        active={active}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={<Home isDarkMode={isDarkMode} setActive={setActive} />}
          />
          <Route path="/about" element={<About setActive={setActive} />} />
          <Route
            path="/projects"
            element={<Projects setActive={setActive} />}
          />
          <Route path="/contact" element={<Contact setActive={setActive} />} />
        </Routes>
      </AnimatePresence>
    </section>
  );
};

export default App;
