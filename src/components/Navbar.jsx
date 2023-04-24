import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black h-[100%] fixed flex flex-col justify-center top-0 left-0 w-[10rem] z-10 p-2 capitalize">
      <section className="h-[50%] flex flex-col items-center justify-center w-[100%]">
        <Link className="py-1 transition hover:text-green" to="/">Home</Link>
        <Link className="py-1 transition hover:text-green" to="/about">About Me</Link>
        <Link className="py-1 transition hover:text-green" to="/projects">Work</Link>
        <Link className="py-1 transition hover:text-green" to="/contact">Contact</Link>
      </section>
      <section className="flex w-[80%] mx-auto text-icons p-1 justify-evenly text-green">
        <span>
          <a href="linkedin.com/mkulemeka">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="">
            <FaInstagram />
          </a>
        </span>
      </section>
    </nav>
  );
};

export default Navbar;
