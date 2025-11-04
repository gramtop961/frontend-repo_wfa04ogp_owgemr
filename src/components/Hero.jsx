import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:pt-24 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Intro */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Aditya Nagurkar
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">Software Engineer & AI Builder</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 max-w-xl text-white/70 leading-relaxed"
            >
              I craft delightful, performant experiences across web and mobile. Passionate about human-centered design, data visualization, and AI-first products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-white shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right: 3D Spline */}
          <div className="relative h-[420px] sm:h-[520px] md:h-[560px] lg:h-[640px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Soft gradient overlay to blend edges - doesn't block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="pointer-events-none absolute -top-24 right-1/3 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
    </section>
  );
};

export default Hero;
