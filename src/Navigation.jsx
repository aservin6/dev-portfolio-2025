import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { navLinkOptions } from "./data/portfolio";

export default function Navigation({ selectedLink, onLinkClick }) {
  return (
    <nav className="fixed top-4 right-4 z-20 text-sm font-bold uppercase md:top-10 md:right-10 md:text-2xl">
      <ul className="">
        {navLinkOptions.map((obj) => {
          const { id, url, text } = obj;
          return (
            <NavLink
              key={id}
              id={id}
              url={url}
              text={text}
              selectedLink={selectedLink}
              onLinkClick={onLinkClick}
            />
          );
        })}
      </ul>
    </nav>
  );
}

function NavLink({ url, text, selectedLink, onLinkClick }) {
  const [delay, setDelay] = useState(1.5);

  useEffect(() => {
    setDelay(0);
  }, []);

  return (
    // Animate links left to right
    <motion.li
      onClick={() => {
        onLinkClick(url);
        setDelay(0);
      }}
      whileTap={{ scale: 1.1, WebkitTextStroke: "1px rgb(63, 63, 70)" }}
      whileHover={{ scale: 1.1, WebkitTextStroke: "1px rgb(63, 63, 70)" }}
      className="relative block overflow-hidden whitespace-nowrap"
    >
      <a href={url} className="inline-block w-full pr-2">
        {text}
        {/* Animate strike-through when selected */}
        <AnimatePresence>
          {selectedLink === url && (
            <motion.div
              initial={{}}
              animate={{ width: "100%" }}
              transition={{ duration: 0.2, delay }}
              exit={{ width: 0 }}
              className="absolute top-2 h-[3px] w-0 cursor-pointer bg-pink-400 md:top-3 md:h-1.5"
            ></motion.div>
          )}
        </AnimatePresence>
      </a>
    </motion.li>
  );
}
