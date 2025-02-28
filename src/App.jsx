// Supports weights 400-800
import "@fontsource-variable/syne";
// Supports weights 100-900
import "@fontsource-variable/inter";
import Background from "./Background";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Contact from "./Contact";
import Socials from "./Socials";
import { useState } from "react";
import Frame from "./ui/Frame";
import Overlay from "./ui/Overlay";
import Marquee from "./ui/Marquee";
import Intro from "./Intro";

function App() {
  let currentPath = location.hash;

  const [selectedLink, setSelectedLink] = useState(
    currentPath === "" ? "#intro" : currentPath,
  );

  const handleLinkChange = (url) => {
    setSelectedLink(url);
  };

  return (
    <>
      <div className="font-primary relative z-10 h-full w-full text-zinc-800">
        <Navigation
          selectedLink={selectedLink}
          onLinkClick={handleLinkChange}
        />
        <main className="h-screen w-full">
          <Intro onLinkChange={handleLinkChange} />
          <Marquee />
          <Projects onLinkChange={handleLinkChange} />
          <Marquee />
          <Contact onLinkChange={handleLinkChange} />
        </main>
        <Socials />
      </div>
      <Background />
      <Frame />
      <Overlay />
    </>
  );
}

export default App;
