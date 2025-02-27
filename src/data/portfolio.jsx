import {
  RiDownload2Line,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";

export const tabs = [
  {
    image: "/indiecosm.png",
    label: "Indiecosm",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    links: [{ live: "https://indiecosm.com", github: null }],
  },
  {
    image: "/akuma.png",
    label: "Akuma Landing Page",
    tags: ["React", "TailwindCSS", "Vite"],
    links: [
      {
        live: "https://akuma-landing-page.netlify.app",
        github: "https://github.com/aservin6/akuma-landing-page",
      },
    ],
  },
  {
    image: "/budget-app.png",
    label: "Simple Budget App",
    tags: ["React", "TypeScript", "TailwindCSS"],
    links: [
      {
        live: "https://budget-tracker-ts.netlify.app/",

        github: "https://github.com/aservin6/budget-tracker",
      },
    ],
  },
];

export const navLinkOptions = [
  { id: 1, url: "#intro", text: "intro" },
  { id: 2, url: "#projects", text: "projects" },
  { id: 3, url: "#contact", text: "contact" },
];

export const socialLinkOptions = [
  {
    id: 1,
    url: "",
    icon: <RiDownload2Line className="size-4 md:size-7" />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/servinalex/",
    icon: <RiLinkedinBoxFill className="size-4 md:size-7" />,
  },
  {
    id: 3,
    url: "https://github.com/aservin6",
    icon: <RiGithubFill className="size-4 md:size-7" />,
  },
];
