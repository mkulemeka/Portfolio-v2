import "./styles/App.scss";

import { About, Contact, Home, Projects } from "./pages";
import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components";
import React from "react";

const App = () => {
  const location = useLocation();
  return (
    <section className="bg-fadedBlack min-h-[100vh] text-white text-regular font-poppins">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </section>
  );
};

export default App;
