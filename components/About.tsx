import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
    >
      {/* Left side - text */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          About <span className="text-[#4f46e5]">Me</span>
        </h2>
        <p className="mb-4 text-lg leading-relaxed text-gray-300">
          I’m{" "}
          <span className="text-[#4f46e5] font-semibold">Bonnke Osakpolor</span>
          , a passionate{" "}
          <span className="text-[#4f46e5]">Fullstack Web Developer</span>
          who loves building{" "}
          <span className="text-[#4f46e5]">pixel-perfect</span> and
          <span className="text-[#4f46e5]"> scalable</span> applications with
          Next.js.
        </p>
        <p className="mb-4 text-gray-400">
          My focus is on creating experiences that are not just functional but
          also
          <span className="text-[#4f46e5]"> visually engaging</span>. With a
          keen eye for design and strong backend skills, I aim to deliver
          projects that balance performance and elegance.
        </p>
        <p className="text-gray-400">
          When I’m not coding, I’m exploring new tools, contributing to
          open-source, and continuously improving my craft.
        </p>
      </div>

      {/* Right side - image */}
      <div className="flex justify-center">
        <div className="w-64 h-64 rounded-2xl overflow-hidden border-2 border-[#4f46e5] shadow-lg shadow-indigo-900/40">
          <Image
            src="/image.png"
            alt="Bonnke Osakpolor"
            width={300}
            height={400}
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
