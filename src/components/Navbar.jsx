import { FaInstagram, FaLaptopCode, FaLinkedinIn } from "react-icons/fa";
import { IoMail, IoMoon, IoPerson, IoSunny } from "react-icons/io5";

import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = ({ active, isDarkMode, setIsDarkMode }) => {
  //page links
  const pages = [
    ["/", <ImHome />],
    ["/about", <IoPerson />],
    ["/projects", <FaLaptopCode />],
    ["/contact", <IoMail />],
  ];

  //social links on navigation
  const socialLinks = [
    {
      tag: <FaInstagram />,
      link: "instagram.com",
    },
    {
      tag: <FaLinkedinIn />,
      link: "linkedin.com/mkulemeka",
    },
  ];

  //function to change theme
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    console.log(isDarkMode);
  };

  console.log(isDarkMode);

  return (
    <>
      <nav id="nav" className="w-[8rem] md:fixed z-10 h-[100%] flex flex-col items-center justify-center gap-10">
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
          {pages.map((page) => (
            <Link
              key={page[0]}
              to={page[0]}
              className={`p-4 rounded-full  transition ease-in-out duration-300 ${
                active === page[0]
                  ? isDarkMode
                    ? "bg-white text-fadedBlack"
                    : "bg-fadedBlack text-white"
                  : isDarkMode
                  ? "hover:bg-fadedBlack"
                  : "hover:bg-whitey"
              }`}
            >
              {page[1]}
            </Link>
          ))}
        </div>
        <div className="w-[50%] bg-fadedMoreBlack flex flex-col items-center gap-3 p-2 rounded-[3rem]">
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.link}
              href={socialLink.link}
              className="p-4 rounded-full hover:bg-green transition ease-in-out duration-300"
            >
              {socialLink.tag}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
