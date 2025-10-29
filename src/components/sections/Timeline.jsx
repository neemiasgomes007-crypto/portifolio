import React from 'react';
import { BookOpen, Award, Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    id: 1,
    date: '2025',
    title: 'Desenvolvedor Full Stack',
    description: 'Especializado em criar aplicações web modernas com React, Next.js e Node.js.',
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    id: 2,
    date: '2024',
    title: 'Projetos Freelancer',
    description: 'Desenvolvimento de sites e aplicações web para diversos clientes.',
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    id: 3,
    date: '2023',
    title: 'Formação em Desenvolvimento Web',
    description: 'Curso completo de desenvolvimento web full stack.',
    icon: <GraduationCap className="w-6 h-6" />
  }
];

export default function Timeline() {
  return (
    <section className="py-32 px-6 relative" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
          <span className="gradient-text">Minha Jornada</span>
        </h2>

        <div className="relative">
          {/* Linha vertical central */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2" />

          {timeline.map((item, index) => (
            <div
              key={item.id}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:ml-[50%]' : 'md:mr-[50%] md:text-right'
              }`}
            >
              {/* Ponto na linha do tempo */}
              <div className="absolute top-0 md:top-6 left-0 md:left-1/2 w-12 h-12 bg-white/5 rounded-full border border-white/10 flex items-center justify-center transform md:-translate-x-1/2 group-hover:border-purple-500/50 transition-all duration-300">
                {item.icon}
              </div>

              {/* Conteúdo */}
              <div className={`ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
              }`}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <span className="text-sm text-purple-400">{item.date}</span>
                  <h3 className="text-xl font-bold mb-2 gradient-text">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}