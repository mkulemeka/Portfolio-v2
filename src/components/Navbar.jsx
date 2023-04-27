import { FaInstagram, FaLaptopCode, FaLinkedinIn } from "react-icons/fa";
import { IoMail, IoPerson } from "react-icons/io5";

import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = [
    ["/", <ImHome />],
    ["/about", <IoPerson />],
    ["/projects", <FaLaptopCode />],
    ["/contact", <IoMail />],
  ];

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
  return (
    <>
      <nav>
        <div>
          {pages.map((page) => (
            <Link to={page[0]}>{page[1]}</Link>
          ))}
        </div>
        <div>
          {socialLinks.map((socialLink) => (
            <a href={socialLink.link}>{socialLink.tag}</a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
