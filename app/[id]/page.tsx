"use client";
import { projects } from "@/lib/links";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { use } from "react";

const ProjectPage = ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = use(params);

  if (!projects[id])
    return (
      <main className="min-h-dvh mx-auto">
        <h2>No projects found</h2>
      </main>
    );
  return (
    <main className="max-w-6xl mx-auto py-16 px-4 text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text and Buttons */}
        <motion.div
          className="flex flex-col justify-between space-y-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-[#E2CBFF]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {projects[id].title}
          </motion.h1>

          <motion.p
            className="leading-relaxed text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {projects[id].description}
          </motion.p>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {/* View Live Button */}
            <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#000319] transform hover:-translate-y-1 transition duration-300">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0D0E2E] px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <Link
                  href={`${projects[id].link}`}
                  className="whitespace-nowrap px-4"
                >
                  View Live
                </Link>
              </span>
            </button>

            {/* GitHub Button */}
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#E2CBFF,45%,#94a3b8,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-gray-900 hover:text-navy transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#000319] transform hover:-translate-y-1 duration-300">
              <Link
                href={`${projects[id].github}`}
                className="whitespace-nowrap"
              >
                See Code on GitHub
              </Link>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src={projects[id].image}
            alt={projects[id].title}
            width={600}
            height={600}
            unoptimized
            priority={false}
            loading="lazy"
            className="rounded-2xl shadow-lg shadow-indigo-900/30 w-full h-[400px] object-contain"
          />
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectPage;
