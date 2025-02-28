import { motion } from "motion/react";

export default function Loading() {
  return (
    <div className="absolute top-0 left-0 flex h-screen w-screen items-center justify-center bg-zinc-800 opacity-90">
      <div className="relative h-1.5 w-1/3 border-2 border-zinc-900 bg-zinc-900 lg:h-3">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          className="absolute h-full w-full bg-zinc-100"
        />
      </div>
    </div>
  );
}
