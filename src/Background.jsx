import { useEffect } from "react";
import { motion } from "motion/react";

export default function Background() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden bg-linear-(--custom-linear)">
      <div className="h-full w-full filter-[url(#goo)_blur(40px)]">
        <CircleGradients />
        <Interactive />
      </div>
      <Filters />
    </div>
  );
}

function Interactive() {
  useEffect(() => {
    const interBubble = document.getElementById("interactive");
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble)
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  }, []);

  return (
    <div
      id="interactive"
      className={`absolute -top-1/2 -left-1/2 hidden h-full w-full bg-radial-(--custom-radial1) opacity-70 mix-blend-hard-light lg:block`}
    ></div>
  );
}

function CircleGradients() {
  return (
    <>
      <div className="animate-moveVertical absolute top-[calc(50%-var(--circle-size)/2)] left-[calc(50%-var(--circle-size)/2)] h-4/5 w-4/5 origin-center bg-radial-(--custom-radial1) opacity-100 mix-blend-hard-light"></div>
      <div className="animate-moveInCircle1 absolute top-[calc(50%-var(--circle-size)/2)] left-[calc(50%-var(--circle-size)/2)] h-4/5 w-4/5 origin-[calc(50%-400px)] bg-radial-(--custom-radial2) opacity-100 mix-blend-hard-light"></div>
      <div className="animate-moveInCircle2 absolute top-[calc(50%-var(--circle-size)/2+200px)] left-[calc(50%-var(--circle-size)/2-500px)] h-4/5 w-4/5 origin-[calc(50%+400px)] bg-radial-(--custom-radial3) opacity-100 mix-blend-hard-light"></div>
      <div className="animate-moveHorizontal absolute top-[calc(50%-var(--circle-size)/2)] left-[calc(50%-var(--circle-size)/2)] h-4/5 w-4/5 origin-[calc(50%-200px)] bg-radial-(--custom-radial4) opacity-70 mix-blend-hard-light"></div>

      <motion.div className="animate-moveInCircle3 absolute top-[calc(50%-var(--circle-size))] left-[calc(50%-var(--circle-size))] h-[calc(var(--circle-size)*2)] w-[calc(var(--circle-size)*2)] origin-[calc(50%-800px)_calc(50%+200px)] bg-radial-(--custom-radial5) opacity-100 mix-blend-hard-light"></motion.div>
    </>
  );
}

export function Filters() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </>
  );
}
