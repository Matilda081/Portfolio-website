"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch(
      "https://formspree.io/f/xlgvwqjg",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      setSuccess(true);
      form.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }

    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="py-28 bg-[#020617] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-medium mb-3">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Connect
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-8">
            Have a project, collaboration or job opportunity?
            Feel free to send me a message.
          </p>
        </motion.div>

        {/* CONTACT CONTAINER */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >

            <div className="flex items-center gap-4 bg-[#0f172a] border border-slate-800 rounded-2xl p-5">
              <div className="bg-cyan-400 text-black p-4 rounded-full text-xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Email
                </h3>

                <p className="text-slate-400 text-sm">
                  ezejchisom@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#0f172a] border border-slate-800 rounded-2xl p-5">
              <div className="bg-green-500 text-white p-4 rounded-full text-xl">
                <FaWhatsapp />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  WhatsApp
                </h3>

                <p className="text-slate-400 text-sm">
                  +2348164720874
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#0f172a] border border-slate-800 rounded-2xl p-5">
              <div className="bg-blue-500 text-white p-4 rounded-full text-xl">
                <FaLinkedin />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  LinkedIn
                </h3>

                <p className="text-slate-400 text-sm">
                  https://www.linkedin.com/in/chisom-eze-3762b92a9
                </p>
              </div>
            </div>

          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="bg-[#0f172a] border border-slate-800 rounded-[30px] p-8 space-y-5"
          >

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-[#020617] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-[#020617] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full bg-[#020617] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
            ></textarea>

            {/* FILE */}
            <input
              type="file"
              name="attachment"
              className="w-full text-slate-400 bg-[#020617] border border-slate-700 rounded-xl px-5 py-4"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-400 text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* SUCCESS MESSAGE */}
            {success && (
              <div className="bg-green-500/20 border border-green-500 text-green-400 text-center py-3 rounded-xl">
                Message submitted successfully 🎉
              </div>
            )}

          </motion.form>

        </div>
      </div>
    </section>
  );
}