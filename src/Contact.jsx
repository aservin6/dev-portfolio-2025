import { useRef, useEffect } from "react";
import { useInView, motion } from "motion/react";

export default function Contact({ onLinkChange }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    isInView && onLinkChange("#contact");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="flex h-screen w-full items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: sectionRef, amount: 0.5 }}
        transition={{ duration: 2, type: "spring" }}
        className="relative mx-auto w-11/12 md:w-4/5 md:p-5"
      >
        <div className="mx-auto flex max-w-2xl flex-col border-2 bg-zinc-50 p-3 shadow-[-12px_12px_0px_0px] shadow-zinc-800">
          <div className="flex items-center justify-center">
            <form
              action="https://getform.io/f/c287a040-25e2-4080-9ea5-050e4346aa45"
              method="POST"
              className="flex w-full flex-col"
            >
              <h4 className="mb-3 text-xl font-extrabold uppercase md:text-2xl">
                Contact Me
              </h4>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border-2 border-zinc-800 bg-transparent p-1 text-sm font-semibold focus:outline-pink-400 md:p-2"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="my-2 border-2 border-zinc-800 bg-transparent p-1 text-sm font-semibold focus:outline-pink-400 md:p-2"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="10"
                className="mb-4 border-2 border-zinc-800 bg-transparent p-1 text-sm font-semibold focus:outline-pink-400 md:p-2"
              />
              <button
                type="submit"
                className="inline-block cursor-pointer rounded-md bg-pink-400 px-8 py-2 text-center text-base font-bold uppercase md:w-max"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
