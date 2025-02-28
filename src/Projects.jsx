import { useInView, motion, AnimatePresence } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { tabs } from "./data/portfolio";

export default function Projects({ onLinkChange }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });

  useEffect(() => {
    isInView && onLinkChange("#projects");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <section
      ref={sectionRef}
      id="projects"
      className="flex h-screen w-full items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: sectionRef, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto w-11/12 md:p-5"
      >
        <div className="flex flex-col justify-between gap-x-5 lg:flex-row">
          <h3 className="mb-3 flex items-center justify-between text-xl font-extrabold uppercase lg:hidden lg:text-3xl">
            <span>Projects</span>
            <span className="font-secondary">{`</>`}</span>
          </h3>
          <div className="h-full w-full">
            <ProjectPreview selectedTab={selectedTab} />
          </div>
          <div className="flex w-full flex-col">
            <h3 className="hidden items-center justify-between text-xl font-extrabold uppercase lg:flex lg:text-3xl">
              <span>Projects</span>
              <span className="font-secondary">{`</>`}</span>
            </h3>
            <div>
              <ProjectTabs
                selectedTab={selectedTab}
                tabs={tabs}
                setSelectedTab={setSelectedTab}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ProjectTabs({ selectedTab, setSelectedTab, tabs }) {
  return (
    <ul className="my-8 space-y-5">
      {tabs.map((item) => (
        <motion.li
          key={item.label}
          initial={false}
          onClick={() => setSelectedTab(item)}
          className="flex cursor-pointer items-center justify-between border-b border-zinc-800 p-2 pb-0"
        >
          <span className="relative text-sm font-bold uppercase md:text-xl">
            {item.label}
            {/* Animate strike-through when selected */}
            <AnimatePresence>
              {selectedTab.label === item.label && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0 }}
                  exit={{ width: 0 }}
                  className="absolute top-2 h-[3px] cursor-pointer bg-pink-400 md:top-3 md:h-1"
                ></motion.div>
              )}
            </AnimatePresence>
          </span>
          <ProjectLinks links={item.links} />
        </motion.li>
      ))}
    </ul>
  );
}

function ProjectLinks({ links }) {
  return (
    <>
      {links.map((link, key) => {
        return (
          <div
            key={key}
            className="flex items-center justify-end space-x-3 text-xs md:text-base"
          >
            {link.live && (
              <a href={link.live} className="hover:underline">
                <div className="flex items-center">
                  <span>Visit</span> <RiArrowRightUpLine size={16} />
                </div>
              </a>
            )}
            {link.github && (
              <a href={link.github} className="hover:underline">
                <div className="flex items-center">
                  <span>Repo</span> <RiArrowRightUpLine size={16} />
                </div>
              </a>
            )}
          </div>
        );
      })}
    </>
  );
}

function ProjectPreview({ selectedTab }) {
  return (
    <AnimatePresence mode={"wait"}>
      {/* Animate image in and out */}
      <motion.div
        key={selectedTab ? selectedTab.label : "empty"}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col space-y-5">
          <div className="border-2 border-zinc-800 object-contain shadow-[-12px_12px_0px_0px] shadow-zinc-800">
            <img src={selectedTab.image}></img>
          </div>
          <ProjectTags selectedTab={selectedTab} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectTags({ selectedTab }) {
  return (
    <div className="flex items-center space-x-3 text-xs md:text-base">
      {selectedTab.tags.map((tag) => {
        return (
          <div
            className="w-fit cursor-default border border-zinc-800 bg-zinc-50 px-2 py-0.5 shadow-[-4px_4px_0px_0px] shadow-zinc-800"
            key={tag}
          >
            {tag}
          </div>
        );
      })}
    </div>
  );
}
