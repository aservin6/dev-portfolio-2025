import { motion } from "motion/react";
import { socialLinkOptions } from "./data/portfolio";

export default function Socials() {
  return (
    <div className="fixed right-4 bottom-4 w-1/2 border-t-2 border-zinc-800 text-xl md:right-10 md:bottom-10 md:w-1/3">
      <div className="relative block overflow-hidden whitespace-nowrap">
        <div className="inline-block w-full">
          <div className="flex items-center">
            <span className="mr-auto cursor-default text-xs font-extrabold uppercase md:text-base">
              AS
            </span>
            <div className="flex items-center space-x-1">
              {socialLinkOptions.map((obj) => {
                const { id, url, icon } = obj;
                return <SocialLink key={id} url={url} icon={icon} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ id, url, icon }) {
  return (
    <>
      {id === 1 ? (
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.2 }}
          href={url}
          className="p-1 md:p-2"
          download
        >
          {icon}
        </motion.a>
      ) : (
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.2 }}
          href={url}
          className="p-1 md:p-2"
          target="_blank"
        >
          {icon}
        </motion.a>
      )}
    </>
  );
}
