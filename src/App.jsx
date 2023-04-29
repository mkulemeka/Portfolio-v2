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

  return (
    <section className="bg-fadedBlack min-h-[100vh] text-white text-regular font-poppins">
      <Navbar active={active} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home setActive={setActive} />} />
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
