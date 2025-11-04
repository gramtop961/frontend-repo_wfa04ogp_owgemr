import React from 'react';
import { Rocket, Brain, Image as ImageIcon, Shield, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Reflexa - AI Powered Mental Health Journal App',
    date: 'July 2025',
    stack: ['React Native', 'Expo', 'Zustand', 'Recharts'],
    icon: Brain,
    points: [
      'Architected cross-platform app with React Native + Expo, boosting stability by 40% and engagement across Android/iOS.',
      'Integrated NLP-based emotion detection and weekly trend analysis, leading to a 25% rise in user insights.',
      'Implemented MFA with biometrics, face ID, and PIN to safeguard private journals without sacrificing UX.'
    ]
  },
  {
    title: 'GYDR - Guide Your Dream Role',
    date: 'June 2025',
    stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Recharts'],
    icon: Rocket,
    points: [
      'AI-powered career guidance with personality, skill, and interest assessments for personalized role matches.',
      'Interactive dashboards visualize traits and dynamically match ideal paths to improve clarity and engagement.',
      'Gemini-backed matching with weighted evaluation (40% personality, 40% skills, 20% interests).'
    ]
  },
  {
    title: 'Dreampixel AI - AI Image Generation App',
    date: 'June 2023',
    stack: ['Python', 'Streamlit'],
    icon: ImageIcon,
    points: [
      'Streamlit web app integrating Stable Diffusion via Hugging Face API for high-quality text-to-image.',
      'User-friendly front-end with validation, history, and downloads to streamline the creation workflow.',
      'Efficient async handling to fetch and render results in real-time.'
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Selected Projects</h2>
            <p className="mt-2 text-white/60">A snapshot of products where design, data, and AI intersect.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 p-2.5 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white leading-tight">{p.title}</h3>
                      <p className="text-xs text-white/50 mt-0.5">{p.date}</p>
                    </div>
                  </div>
                </div>

                <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                  {p.points.map((pt) => (
                    <li key={pt} className="leading-relaxed">• {pt}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default Projects;
