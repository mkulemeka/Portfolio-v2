const MobileNav = () => {
  return (
    <>
      <nav className=" fixed bottom-0 left-0 w-[100%] md:hidden h-[5rem]">
        <div className="bg-black h-[80%] w-[50%] mx-auto rounded-[4rem] flex items-center justify-center text-icons">
          <Link className="py-1 transition text-green px-3" to="/">
            <ImHome />
          </Link>
          <Link className="py-1 transition text-green px-3" to="/about">
            <IoPerson />
          </Link>
          <Link className="py-1 transition text-green px-3" to="/projects">
            <FaLaptopCode />
          </Link>
          <Link className="py-1 transition text-green px-3" to="/contact">
            <IoMail />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
