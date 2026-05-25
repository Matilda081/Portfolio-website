"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-[#020617] text-white pt-28">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 font-medium mb-4">
            Frontend Developer & Backend Enthusiast
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Crafting Beautiful Modern Web Experiences
          </h1>

          <p className="text-slate-300 text-lg leading-8 mb-8 max-w-xl">
            I build responsive, scalable and modern web applications using Next.js, TypeScript and Tailwind CSS.
          </p>

          <div className="flex gap-5 flex-wrap">
            <a href="#projects" className="bg-cyan-400 text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition">
              View Projects <FaArrowRight />
            </a>

            <a href="#contact" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition">
              Contact Me
            </a>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-6 text-2xl mt-10">
            <a href="https://github.com/Matilda081" target="_blank" className="hover:text-cyan-400">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/chisom-eze-3762b92a9" target="_blank" className="hover:text-cyan-400">
              <FaLinkedin />
            </a>

            <a href="https://twitter.com/@EzeChisom12837" target="_blank" className="hover:text-cyan-400">
              <FaTwitter />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}