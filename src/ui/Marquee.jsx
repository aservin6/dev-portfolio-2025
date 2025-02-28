import { motion } from "motion/react";

import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiGit,
  SiNpm,
  SiVite,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiFramer,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Marquee() {
  return (
    <div
      id="marquee"
      className="mx-auto mt-10 flex items-center overflow-hidden"
    >
      <MarqueeItem icons={icons} from={0} to={"-100%"} />
    </div>
  );
}

function MarqueeItem({ icons, from, to }) {
  return (
    <div className="flex items-center border-y border-zinc-800 py-2">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-shrink-0 will-change-transform"
      >
        {icons.map((item, index) => {
          return (
            <div className="w-12 pr-10 md:w-24 md:pr-20" key={index}>
              {item}
            </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-shrink-0 will-change-transform"
      >
        {icons.map((item, index) => {
          return (
            <div className="w-12 pr-10 md:w-24 md:pr-20" key={index}>
              {item}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

const icons = [
  <SiReact key="react" className="size-4 md:size-7" />,
  <SiTypescript key="typescript" size={28} className="size-4 md:size-7" />,
  <SiTailwindcss key="tailwind" size={28} className="size-4 md:size-7" />,
  <SiNextdotjs key="nextjs" size={28} className="size-4 md:size-7" />,
  <SiJavascript key="javascript" size={28} className="size-4 md:size-7" />,
  <SiGit key="git" size={28} className="size-4 md:size-7" />,
  <SiHtml5 key="html" size={28} className="size-4 md:size-7" />,
  <SiNpm key="npm" size={28} className="size-4 md:size-7" />,
  <SiVite key="vite" size={28} className="size-4 md:size-7" />,
  <SiCss3 key="css" size={28} className="size-4 md:size-7" />,
  <SiGithub key="github" size={28} className="size-4 md:size-7" />,
  <VscVscode key="vscode" size={28} className="size-4 md:size-7" />,
  <SiFramer key="framer" size={28} className="size-4 md:size-7" />,
];
