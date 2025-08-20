import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <section
      id="/"
      className="flex flex-col md:flex-row items-center justify-around max-w-5xl mx-auto"
    >
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-100 h-[80vh] w-[50vw]" fill="gray" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h1 className="mb-4">
          Hi, I&apos;m <span>Bonnke Osakpolor</span>
        </h1>
        <h3 className="leading-tight mb-4">
          A Fullstack Developer with Next.js <br />
          Building Pixel-perfect and scalable web apps
        </h3>

        <div className="flex items-center justify-center md:justify-start gap-4">
          <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transform hover:-translate-y-1 transition duration-400">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <Link href="/#projects">View My Work</Link>
            </span>
          </button>

          <button className="inline-flex h-12 animate-shimmer items-center justify-center text-navy rounded-md border border-slate-800 bg-[linear-gradient(110deg,#c1c2d3,45%,#94a3b8,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transform hover:-translate-y-1 duration-400">
            <Link href="/#contact">Get In Touch</Link>
          </button>
        </div>
      </div>
      <Image
        src="/undraw_designer_efwz.svg"
        alt="hero-img"
        width={400}
        height={500}
        className="w-[500px] h-auto object-contain"
        unoptimized
        priority={false}
      />
    </section>
  );
};

export default Hero;
