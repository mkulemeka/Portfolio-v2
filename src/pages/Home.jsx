import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";

import { Link } from "react-router-dom";
import { SocialLinkButton } from "../components";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Home = ({ setActive, isDarkMode }) => {
  const socialLinks = [
    { link: "twitter.com", name: "Twitter", tag: <BsTwitter /> },
    { link: "facebook.com", name: "Facebook", tag: <BsFacebook /> },
    { link: "github.com/mkulemeka", name: "Github", tag: <BsGithub /> },
  ];

  const homeLoad = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        staggerChildren: 0.25,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  //set path on page load
  useEffect(() => {
    const currentPath = window.location.pathname;
    setActive(currentPath);
  }, []);

  return (
    <motion.main
      variants={homeLoad}
      initial="hidden"
      animate="show"
      className="w-[50%] mx-auto py-20 min-h-screen flex flex-col justify-center"
    >
      <motion.section
        variants={item}
        className={`${!isDarkMode && "text-fadedBlack"}`}
      >
        <h1 className=" text-heading font-montserrat font-exbold">
          Hey, I am <span className="text-green">Mtendere</span>.
        </h1>
        <h2 className="text-subHeading font-montserrat">
          A front-end developer
        </h2>
      </motion.section>
      <motion.section variants={item} className="flex gap-10 mt-10">
        {socialLinks.map((socialLink) => (
          <SocialLinkButton socialLink={socialLink} />
        ))}
      </motion.section>
      <motion.section variants={item}>
        <p className="text-regular text-grey mt-10 font-poppins">
          My name is Mtendere Kulemeka and I am a rising web developer from{" "}
          <a href="" className="text-green">
            Malawi
          </a>{" "}
          and currently based in Philadelphia. I am versed in other
          technological fields such as Networking and Cyber Security. I am
          currently a senior student at{" "}
          <a href="temple.edu" className="text-green">
            Temple University
          </a>{" "}
          and I am pursuing a persuing a B.Sc in Information Science{" "}
          <span className="text-green">&</span> Technology
        </p>
      </motion.section>
      <motion.section variants={item} className="my-10">
        <button className="rounded-[2rem] button-effect px-5 py-3 border-fadedMoreBlack outline-none transition duration-700 font-bold">
          <Link to="/contact">Reach Out </Link>
        </button>
      </motion.section>
    </motion.main>
  );
};

export default Home;
