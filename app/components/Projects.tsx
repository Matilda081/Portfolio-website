"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Restaurant Website",
      type: "UI/UX Design",
      video: "/videosjc/Resturant-website.mp4",
      description:
        "A modern restaurant website with beautiful layout, menu display and responsive design.",
      live: "https://matilda081.github.io/Restaurant-website/Resturant-website.html",
      github: "https://github.com/Matilda081/Restaurant-website.git",  
    },
    {
      title: "Static Business Website",
      type: "Landing Page",
      video: "/videosjc/Simple-static.mp4",
      description:
        "A clean and responsive static website built for business presentation.",
      live: "https://next-js-simplestatic-website.vercel.app", 
      github: "https://github.com/Matilda081/next.js-simplestatic-website.git",
       
    },
    {
      title: "Todo App",
      type: "JavaScript App",
      video: "/videosjc/todo-app.mp4",
      description:
        "A functional todo application with add, delete and manage tasks features.",
      live: "https://matilda081.github.io/Todo-App/todo-project.html",
      github: "https://github.com/Matilda081/Todo-App.git",  
       
    },
  ];

  return (
    <section id="projects" className="py-28 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium mb-3">
            My Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Selected Works
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6 }}
              className="bg-[#020617] border border-slate-800 rounded-[35px] overflow-hidden hover:border-cyan-400 transition"
            >

              {/* VIDEO */}
              <video
                src={project.video}
                controls
                className="w-full h-60 object-cover rounded-t-[35px]"
              />

              {/* CONTENT */}
              <div className="p-7">
                <p className="text-cyan-400 text-sm mb-2">
                  {project.type}
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-7 text-sm">
                  {project.description}
                </p>

                {/* BUTTONS */}
               <div className="flex gap-3 flex-wrap">

               {/* LIVE DEMO */}
              <a
               href={project.live}
               target="_blank"
               className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
               >
                Live Demo
              </a>

                {/* GITHUB */}
              <a
                 href={project.github}
                 target="_blank"
                 className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold hover:bg-cyan-400 hover:text-black transition"
                >
                GitHub
              </a>

               </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}