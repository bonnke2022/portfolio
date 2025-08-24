"use client";

import { projects } from "@/lib/links";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Work() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-24 text-center">
        Some of My <span className="text-[#4f46e5]">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 ">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="group p-4 rounded-2xl shadow-lg overflow-hidden bg-[#0a0f2c] text-navy transition-transform hover:scale-105"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={400}
              loading="lazy"
              className="w-full h-64 object-contain rounded-lg"
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p>{project.intro}</p>

              <motion.div
                className="flex items-center justify-center md:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <Button asChild className="w-full bg-[#4f46e5]">
                  <Link href={`/${project.id}`}>View Project</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
