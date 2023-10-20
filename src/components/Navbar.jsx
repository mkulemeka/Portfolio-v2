import { FaInstagram, FaLaptopCode, FaLinkedinIn } from "react-icons/fa";
import { IoMail, IoMoon, IoPerson, IoSunny } from "react-icons/io5";

import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = ({ active, isDarkMode, setIsDarkMode }) => {
  //page links
  const pages = [
    { path: "/", icon: <ImHome />, label: "Home" },
    { path: "/about", icon: <IoPerson />, label: "About" },
    { path: "/projects", icon: <FaLaptopCode />, label: "Projects" },
    { path: "/contact", icon: <IoMail />, label: "Contact" },
  ];

  //social links on navigation
  const socialLinks = [
    {
      icon: <FaInstagram />,
      link: "instagram.com",
    },
    {
      icon: <FaLinkedinIn />,
      link: "linkedin.com/mkulemeka",
    },
  ];

  //function to change theme
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    console.log(isDarkMode);
  };

  return (
    <>
      <nav
        id="nav"
        className="w-[8rem] fixed z-10 h-[100%] flex flex-col items-center justify-center gap-10"
      >
        <div className="w-[50%] h-[4rem] bg-fadedMoreBlack flex flex-col items-center justify-center gap-3 p-2 rounded-full">
          <button
            className="p-4 rounded-full transition ease-in-out"
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <IoMoon className="transition ease-in-out duration-500" />
            ) : (
              <IoSunny className="transition ease-in-out duration-500" />
            )}
          </button>
        </div>
        <div
          className={`w-[50%] ${
            isDarkMode ? "bg-fadedMoreBlack text-white" : "bg-white text-black"
          } flex flex-col items-center gap-3 p-2 rounded-[3rem] transition duration-300`}
        >
          {pages.map((page) => {
            let activeClass = "";
            if (active === page.path) {
              activeClass = isDarkMode
                ? "bg-white text-fadedBlack"
                : "bg-fadedBlack text-white";
            } else {
              activeClass = isDarkMode
                ? "hover:bg-fadedBlack"
                : "hover:bg-whitey";
            }
            return (
              <Link
                key={page.label}
                to={page.path}
                className={`p-4 rounded-full  transition ease-in-out duration-300 ${activeClass}`}
              >
                {page.icon}
              </Link>
            );
          })}
        </div>
        <div className="w-[50%] bg-fadedMoreBlack flex flex-col items-center gap-3 p-2 rounded-[3rem]">
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.link}
              href={socialLink.link}
              className="p-4 rounded-full hover:bg-green transition ease-in-out duration-300"
            >
              {socialLink.icon}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
