import React from 'react';
import { Code2, Boxes, Wrench } from 'lucide-react';

const SKILLS = {
  'Languages': ['Java', 'Python', 'C', 'SQL (SQLite)', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  'Frameworks': ['React', 'Node.js', 'Flask', 'React Native', 'Expo', 'Streamlit'],
  'Developer Tools': ['Git', 'Docker', 'Google Cloud', 'AWS', 'VS Code', 'PyCharm', 'IntelliJ'],
  'Libraries': ['pandas', 'NumPy', 'Matplotlib', 'Zustand', 'Recharts', 'Lucide React', 'Framer Motion', 'Tailwind CSS'],
  'AI/ML': ['Hugging Face API', 'NLP', 'Stable Diffusion', 'Gemini API', 'Emotion Detection']
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Technical Skills</h2>
          <p className="mt-2 text-white/60">A toolkit that balances strong engineering with rapid product iteration.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-emerald-300">{category === 'Languages' ? <Code2 className="h-5 w-5" /> : category === 'AI/ML' ? <Boxes className="h-5 w-5" /> : <Wrench className="h-5 w-5" />}</span>
                <h3 className="text-white font-medium">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default Skills;
