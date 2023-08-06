import { motion } from "framer-motion";
import { useEffect } from "react";

const About = ({ setActive }) => {
  useEffect(() => {
    const currentPath = window.location.pathname;
    setActive(currentPath);
  }, []);

  const aboutLoad = {
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

  return (
    <motion.section
      variants={aboutLoad}
      initial="hidden"
      animate="show"
      className="w-[50%] mx-auto py-20 min-h-screen flex flex-col justify-center"
    >
      <motion.section variants={item} className={`text-heading font-exbold font-montserrat`}>
        <h1 className=" text-green">About</h1>
      </motion.section>
    </motion.section>
  );
};

export default About;
