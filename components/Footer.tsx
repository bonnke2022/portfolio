"use client";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-gray-300 py-6 mt-12 border-t-[1px] border-gray-400">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        {/* Name / Branding */}
        <p className="text-lg font-semibold">© 2025 Bonnke Omorehiomwan</p>

        {/* Social Links */}
        <div className="flex gap-8 items-center justify-around md:justify-between">
          <div className="flex gap-4">
            <a
              href="mailto:bonnkeomorehiomwan@gmail.com"
              aria-label="Email"
              className="hover:text-gray-400"
            >
              <CiMail size={28} />
            </a>
            <a
              href="https://github.com/bonnke2022"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-400"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/bonnke-omorehiomwan-3694b1263"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-400"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            <ArrowUp size={16} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
