import { About, Contact, Home, Projects } from "./pages";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components";
import React from "react";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./about" element={<About />} />
        <Route path="./projects" element={<Projects />} />
        <Route path="./contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
