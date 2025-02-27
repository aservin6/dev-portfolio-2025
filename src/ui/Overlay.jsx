import { motion } from "motion/react";

export default function Overlay() {
  return (
    <motion.div className="noiseFilter pointer-events-none fixed top-0 left-0 z-20 h-screen w-screen" />
  );
}
