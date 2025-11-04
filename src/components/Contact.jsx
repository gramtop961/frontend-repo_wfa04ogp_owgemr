import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Let’s Connect</h2>
          <p className="mt-2 text-white/60">I’m excited to collaborate on ambitious products and thoughtful experiences.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="tel:+918073134199"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 hover:bg-white/10 transition"
          >
            <span className="rounded-xl bg-emerald-500/20 p-3 text-emerald-300"><Phone className="h-5 w-5" /></span>
            <div>
              <p className="text-xs text-white/50">Phone</p>
              <p className="text-white">+91 80731 34199</p>
            </div>
          </a>

          <a
            href="mailto:adityanagurkar@gmail.com"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 hover:bg-white/10 transition"
          >
            <span className="rounded-xl bg-cyan-500/20 p-3 text-cyan-300"><Mail className="h-5 w-5" /></span>
            <div>
              <p className="text-xs text-white/50">Email</p>
              <p className="text-white">adityanagurkar@gmail.com</p>
            </div>
          </a>
        </div>

        <p className="mt-10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Aditya Nagurkar. Built with React, Tailwind, and a splash of 3D.
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default Contact;
