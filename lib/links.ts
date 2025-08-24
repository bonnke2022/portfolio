import { IconType } from "react-icons";
import { FaHtml5, FaGit } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { IoLogoReact, IoLogoGithub } from "react-icons/io5";
import {
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoPostgresql,
} from "react-icons/bi";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import { SiPrisma, SiRedux } from "react-icons/si";
import { StaticImageData } from "next/image";

type TechProps = {
  id: number;
  title: string;
  icon: IconType;
};

export const techStack: TechProps[] = [
  {
    id: 1,
    title: "HTML",
    icon: FaHtml5,
  },
  {
    id: 2,
    title: "CSS",
    icon: IoLogoCss3,
  },
  {
    id: 3,
    title: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    id: 4,
    title: "React",
    icon: IoLogoReact,
  },
  {
    id: 5,
    title: "Tailwind Css",
    icon: BiLogoTailwindCss,
  },
  {
    id: 6,
    title: "Typescript",
    icon: BiLogoTypescript,
  },
  {
    id: 7,
    title: "Next.js",
    icon: RiNextjsFill,
  },
  {
    id: 8,
    title: "GitHub",
    icon: IoLogoGithub,
  },
  {
    id: 9,
    title: "Git",
    icon: FaGit,
  },
  {
    id: 10,
    title: "Postgresql",
    icon: BiLogoPostgresql,
  },
  {
    id: 11,
    title: "Prisma",
    icon: SiPrisma,
  },
  {
    id: 12,
    title: "Supabase",
    icon: RiSupabaseFill,
  },
];

type projectProps = {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  intro: string;
  link: string;
  github: string;
};

export const projects: projectProps[] = [
  {
    id: 1,
    title: "Jobify",
    image: "/undraw_artificial-intelligence_43qa.svg",
    description:
      "Jobify is a web app for job hunters. It allows the user to keep track of all the previous jobs he/she has applied for. It is also able to tell the users if said jobs are pending, awaiting interviews or even rejected. It was my first ever fullstack project. I didn't have my problems at this stage but everything I had to learn was new. I had to understand Postgresql and Prisma, even how to connect a database to your codebase. I also got introduced to libraries like ShadCN-UI, Daisy UI, Material UI, even GSAP and Framer Motion. It was a wonderful experience.",
    intro:
      "A job tracking website that helps users keep track of all the jobs they applied for.",
    link: "https://job-app-rho-umber.vercel.app",
    github: "https://github.com/bonnke2022/job-app",
  },
  {
    id: 2,
    title: "Luxe By Deba",
    image: "/fine-blonde.jpg",
    description:
      "Luxe by Deba is a very recent project I took on. It is an ecommerce website I made for my sister Osadebamwen which is where the name comes from 'Luxe by Deba'. She sells clothing accessories and everything related. My biggest challenge in building the website was that I noticed that I didn't know how to upload an image through the backend. It was a very little and subtle knowledge that gave me many problems and I couldn't figure out. After a few days I figured it out using Cloudinary, It was really exciting to overcome my challenges no matter how little they were. I also used redux and typical react libraries for this project.",
    intro:
      "An ecommerce clothing website where users can buy all types of clothing and accessories.",
    link: "https://luxe-app-jl4k.vercel.app",
    github: "https://github.com/bonnke2022/luxe-app",
  },
  {
    id: 3,
    title: "Space Tourism",
    image: "/image-space-capsule-portrait.jpg",
    description:
      "The Space Tourism website gives you an experience about space and space exploration. It's one of your typical projects from frontendmentor.io, It is a frontend project and I used it to learn about building a design system. I was also able to get a lot of reset settings for my Css. It involved html, css, react, javaScript and tailwind",
    intro:
      "A website that teaches you about space and shows you all of its secrets.",
    link: "https://space-tour-ruby.vercel.app",
    github: "https://github.com/bonnke2022/space-tour",
  },
];
