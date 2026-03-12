"use client";

import { Linkedin, Mail, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_fy0i26f",
        "template_opel3me",
        form.current,
        "B3Gzs2zTEirnJlbfV"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message Transmitted! Thank you for reaching out. I'll get back to you soon.");
          if (e.target instanceof HTMLFormElement) {
            e.target.reset();
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Uh oh! Something went wrong. There was a problem sending your message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- LEFT COLUMN: IMAGE 1 LAYOUT --- */}
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-6">
              <h2 
                className="text-5xl md:text-7xl font-bold dark:text-white text-slate-900 uppercase tracking-tighter"
                style={{ fontFamily: "var(--font-bebas, impact, sans-serif)", transform: "scaleY(1.1)" }}
              >
                Let&apos;s Connect
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed text-sm md:text-base">
                Whether it&apos;s about aviation, AI systems, or a shared passion for flight — I&apos;d love to hear from you.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href="mailto:atharvanagarsekar17@gmail.com"
                className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black px-6 py-3.5 rounded-full font-semibold flex items-center justify-center gap-3 transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]"
              >
                <Mail size={18} />
                <span>atharvanagarsekar17@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/atharva-nagarsekar-9699a9207"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-white/10 hover:border-white/30 dark:text-white text-slate-900 px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-3 transition-all duration-300 w-full sm:w-auto"
              >
                <Linkedin size={18} className="text-sky-500" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* --- RIGHT COLUMN: IMAGE 2 FORM --- */}
          <div className="bg-slate-100 dark:bg-[#0b1120] p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/5 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center dark:text-white text-slate-900 tracking-tight">Transmit a Message</h3>
            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-center dark:text-white text-slate-900">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-white/5 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-sans placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  placeholder="Your Name..."
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-center dark:text-white text-slate-900">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-white/5 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-sans placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  placeholder="Your Email..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-center dark:text-white text-slate-900">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-white/5 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none font-sans placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  placeholder="Hello, I&apos;d like to discuss an opportunity..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.23)] hover:-translate-y-0.5 disabled:opacity-50 text-base"
              >
                {isSubmitting ? "Transmitting..." : "Transmit Message"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
