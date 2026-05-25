"use client";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500 text-5xl" />,
    },

    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
    },

    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-5xl" />,
    },

    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-400 text-5xl" />,
    },

    {
      name: "React",
      icon: <FaReact className="text-cyan-400 text-5xl" />,
    },

    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white text-5xl" />,
    },

    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-300 text-5xl" />,
    },

    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 text-5xl" />,
    },
  ];

  return (
    <section id="skills" className="py-28 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-cyan-400 font-medium mb-3">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0f172a] border border-slate-800 rounded-[30px] p-8 flex flex-col items-center gap-5 hover:border-cyan-400 transition"
            >
              {skill.icon}

              <h3 className="font-semibold">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}