import React from 'react';
import { Code2, FileCode, Database, Paintbrush } from 'lucide-react';

const skills = [
  {
    category: 'Front-end',
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind', level: 90 }
    ]
  },
  {
    category: 'Back-end',
    icon: <Database className="w-6 h-6 text-blue-400" />,
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'SQL', level: 70 },
      { name: 'MongoDB', level: 75 }
    ]
  },
  {
    category: 'UI/UX Design',
    icon: <Paintbrush className="w-6 h-6 text-pink-400" />,
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Responsividade', level: 90 },
      { name: 'Animações', level: 80 },
      { name: 'Prototipagem', level: 75 }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section className="py-32 px-6 relative" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
          <span className="gradient-text">Habilidades</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div key={category.category} className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold gradient-text">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-white/90">{skill.name}</span>
                        <span className="text-white/60">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animation: 'progressBar 1.5s ease-out'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}