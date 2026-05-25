"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-70 h-70 md:w-90 md:h-90">

            {/* 🔵 BLUE GLOW */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/40 blur-3xl rounded-full animate-pulse"></div>

            {/* 🟣 PURPLE GLOW */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/40 blur-3xl rounded-full animate-pulse"></div>

            {/* 🟢 GREEN GLOW */}
            <div className="absolute top-20 right-0 w-32 h-32 bg-green-400/30 blur-3xl rounded-full animate-pulse"></div>

            {/* 🔴 PINK GLOW */}
            <div className="absolute bottom-20 left-0 w-32 h-32 bg-pink-500/30 blur-3xl rounded-full animate-pulse"></div>

            {/* MAIN CIRCLE IMAGE */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl z-10">
              <Image
                src="/imagejc/Chisom.jpeg"
                alt="Jovi Creatives"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

          </div>
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-medium mb-3">About Me</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Passionate Frontend Developer & Backend Enthusiast
          </h2>

          <p className="text-slate-300 leading-8 mb-6 text-lg">
            I am a creative frontend developer focused on building modern,
            responsive and visually appealing web applications using Next.js,
            TypeScript and Tailwind CSS.
          </p>

          <p className="text-slate-300 leading-8 text-lg mb-8">
            I also have backend experience with Node.js and Express, which helps
            me understand full-stack development and build complete web solutions.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#020617] border border-slate-800 rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
              <p className="text-slate-300">Projects Completed</p>
            </div>

            <div className="bg-[#020617] border border-slate-800 rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">1+</h3>
              <p className="text-slate-300">Years Experience</p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}