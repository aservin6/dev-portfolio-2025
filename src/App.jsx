// Supports weights 400-800
import "@fontsource-variable/syne";
// Supports weights 100-900
import "@fontsource-variable/inter";
import Background from "./Background";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Contact from "./Contact";
import Socials from "./Socials";
import { useState, lazy, Suspense } from "react";
import Frame from "./ui/Frame";
import Overlay from "./ui/Overlay";
import Marquee from "./ui/Marquee";
import Loading from "./ui/Loading";

function App() {
  let currentPath = location.hash;

  const [selectedLink, setSelectedLink] = useState(
    currentPath === "" ? "#intro" : currentPath,
  );

  const handleLinkChange = (url) => {
    setSelectedLink(url);
  };

  const HeavyAnimationComponent = lazy(() => import("./Intro"));

  return (
    <>
      <div className="font-primary relative z-10 h-full w-full text-zinc-800">
        <Navigation
          selectedLink={selectedLink}
          onLinkClick={handleLinkChange}
        />
        <Suspense fallback={<Loading />}>
          <main className="h-screen w-full">
            {/* Intro page */}
            <HeavyAnimationComponent onLinkChange={handleLinkChange} />
            <Marquee />
            <Projects onLinkChange={handleLinkChange} />
            <Marquee />
            <Contact onLinkChange={handleLinkChange} />
          </main>
        </Suspense>
        <Socials />
      </div>
      <Background />
      <Frame />
      <Overlay />
    </>
  );
}

export default App;
