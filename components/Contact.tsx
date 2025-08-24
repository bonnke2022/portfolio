"use client";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "sonner";

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwjaavb");
  if (state.succeeded) {
    return (
      <div className="min-h-dvh py-10 space-y-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Intro + Socials */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Get in <span className="text-[#4f46e5]">Touch</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Whether you have a question, a project idea, or just want to say
              hi, feel free to drop a message or reach out on social media.
            </p>
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
          </div>

          {/* Right: Form */}
          <form
            className="space-y-4 bg-soft-white rounded-2xl p-6 text-navy shadow-lg"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              placeholder="Message"
              name="message"
              rows={5}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-500"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-indigo-600 text-white rounded-lg py-2 font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  return (
    <section id="contact">
      <section className="bg-[#000319] text-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Intro + Socials */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Get in <span className="text-[#4f46e5]">Touch</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Whether you have a question, a project idea, or just want to say
              hi, feel free to drop a message or reach out on social media.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:youremail@example.com"
                aria-label="Email"
                className="hover:text-gray-400"
              >
                <CiMail size={28} />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-gray-400"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-gray-400"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form
            className="space-y-4 bg-soft-white rounded-2xl p-6 text-navy shadow-lg"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              placeholder="Message"
              name="message"
              rows={5}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-500"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              onClick={() => toast("Message has been sent successfully!!!", {})}
              className="w-full bg-indigo-600 text-white rounded-lg py-2 font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Contact;
