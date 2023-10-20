import { Link } from "react-router-dom";

const MobileNav = () => {
  const pages = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className=" fixed bottom-0 left-0 w-[100%] md:hidden h-[5rem]">
        <div className="bg-black h-[80%] w-[50%] mx-auto rounded-[4rem] flex items-center justify-center text-icons">
          {pages.map((page) => (
            <Link
              key={page.label}
              className="py-1 transition text-green px-3"
              to={page.path}
            >
              {page.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
