import { motion } from "motion/react";

export default function Frame() {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="fixed top-0 left-0 h-full w-full"
    >
      <div className="absolute top-1 left-1 h-10 w-10 border-t-2 border-l-2 border-zinc-800 md:top-5 md:left-5"></div>
      <div className="absolute top-1 right-1 h-10 w-10 border-t-2 border-r-2 border-zinc-800 md:top-5 md:right-5"></div>
      <div className="absolute bottom-1 left-1 h-10 w-10 border-b-2 border-l-2 border-zinc-800 md:bottom-5 md:left-5"></div>
      <div className="absolute right-1 bottom-1 h-10 w-10 border-r-2 border-b-2 border-zinc-800 md:right-5 md:bottom-5"></div>
    </motion.div>
  );
}
