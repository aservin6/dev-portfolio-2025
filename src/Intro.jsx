import { useRef, useEffect, useState } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";

const DURATION = 0.3;
const STAGGER = 0.03;

export default function Intro({ onLinkChange }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    isInView && onLinkChange("#intro");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <section ref={sectionRef} id="intro" className="relative h-screen w-full">
      <div className="relative top-1/4 mx-auto flex max-w-fit flex-col space-y-12 md:p-5">
        <div className="flex flex-col justify-center select-none">
          <Heading sectionRef={sectionRef}>Alex&nbsp;Servin</Heading>
          <Subheading>Front-End&nbsp;Developer</Subheading>
        </div>
      </div>
      <BackgroundElements />
    </section>
  );
}

function Heading({ children, sectionRef }) {
  return (
    <motion.h1
      initial="initial"
      whileInView="animate"
      viewport={{ root: sectionRef, amount: 0.5 }}
      className="relative block overflow-hidden text-3xl font-extrabold whitespace-nowrap uppercase will-change-transform sm:text-5xl md:text-6xl xl:text-8xl"
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              animate: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.h1>
  );
}

function Subheading({ children }) {
  const [stagger, setStagger] = useState(STAGGER);
  const [duration, setDuration] = useState(DURATION);

  useEffect(() => {
    setStagger(0);
    setDuration(0.2);
  }, []);

  return (
    <motion.h2
      initial="initial"
      animate="animate"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap"
    >
      <div className="text-stroke text-xl font-bold text-transparent uppercase sm:text-2xl md:text-4xl xl:text-5xl">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              animate: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              delay: stagger * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <motion.div
        className="absolute inset-0 hidden text-xl font-bold uppercase md:block"
        variants={{ initial: { y: "100%" }, hovered: { y: "10%" } }}
      >
        Transforming&nbsp;ideas&nbsp;into&nbsp;interactive&nbsp;experiences.
      </motion.div>
    </motion.h2>
  );
}

function BackgroundElements() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.03 }}
      transition={{ duration: 1 }}
      className="font-secondary pointer-events-none absolute top-1/4 left-1/3 text-9xl font-extrabold select-none md:top-1/6 md:left-1/2 md:text-[20rem]"
    >{`</>`}</motion.div>
  );
}
