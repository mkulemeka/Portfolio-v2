import { motion } from "framer-motion";
import { useEffect } from "react";

const Projects = ({ setActive }) => {
  useEffect(() => {
    const currentPath = window.location.pathname;
    setActive(currentPath);
  }, []);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="w-[65%] mx-auto py-20"
    >
      Projects
    </motion.section>
  );
};

export default Projects;
