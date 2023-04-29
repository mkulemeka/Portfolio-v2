import { motion } from "framer-motion";

const Projects = () => {
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
