import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="w-[65%] mx-auto py-20"
    >
      Contact
    </motion.section>
  );
};

export default Contact;
