"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { techStack } from "@/lib/links";

const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto mb-32 space-y-20 py-10">
      {/* Left side - text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-24 text-center">
            About <span className="text-[#4f46e5]">Me</span>
          </h2>

          <motion.p
            className="mb-8 text-lg leading-relaxed text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I’m{" "}
            <span className="text-[#4f46e5] font-semibold">
              Bonnke Osakpolor
            </span>
            , a passionate{" "}
            <span className="text-[#4f46e5]">Fullstack Web Developer</span> who
            loves building <span className="text-[#4f46e5]">pixel-perfect</span>{" "}
            and
            <span className="text-[#4f46e5]"> scalable</span> applications with
            Next.js.
          </motion.p>

          <motion.p
            className="mb-8 text-gray-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I&apos;m a graduate of the University of Benin where I studied
            Electrical/Electronics Engineering. I started coding in my second
            year and quickly got hooked when I discovered JavaScript. Since
            then, I&apos;ve built multiple projects, moved on to React.js, and
            then Next.js.
          </motion.p>

          <motion.p
            className="mb-8 text-gray-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I also spent some time teaching JavaScript, React, and Next.js at{" "}
            <span className="text-[#4f46e5]">Decipher Innovate</span>, where I
            learned a lot about coding environments and mentoring aspiring
            developers.
          </motion.p>

          <motion.p
            className="mb-8 text-gray-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            My focus is on creating experiences that are functional yet{" "}
            <span className="text-[#4f46e5]">visually engaging</span>. With a
            keen eye for design and strong backend skills, I aim to deliver
            projects that balance performance and elegance.
          </motion.p>
        </motion.div>

        {/* Right side - image */}
        <motion.div
          className="flex flex-col justify-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-90 md:w-100 h-100 rounded-2xl overflow-hidden border-2 border-[#4f46e5] shadow-lg shadow-indigo-900/40 transition-transform"
          >
            <Image
              src="/undraw_job-hunt_5umi.svg"
              alt="Illustration of a person job hunting, symbolizing career focus"
              width={700}
              height={600}
              className="w-full h-full object-contain"
            />
          </motion.div>

          <motion.p
            className="mb-4 text-gray-400"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            As a developer, I&apos;ve struggled with design at first, but over
            the years I&apos;ve seen its importance. I&apos;ve taken courses and
            continue to grow as a designer.
          </motion.p>

          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            When I’m not coding, I explore new tools, improve my craft, play
            football, and read self-help books to build good habits and
            character.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="font-semibold mb-12">
          My Tech <span className="text-[#4f46e5]">Stack</span>
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {techStack.map((link) => {
            const Icon = link.icon;
            return (
              <div
                key={link.id}
                className="flex flex-col items-center justify-center gap-4"
              >
                <Icon size={40} color="#4f46e5" />
                <h3 className="whitespace-nowrap">{link.title}</h3>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
