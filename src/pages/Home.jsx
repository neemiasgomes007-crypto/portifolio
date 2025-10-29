import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { MessageCircle, Code, Sparkles, Rocket } from 'lucide-react';
import Hero3D from '@/components/portfolio/Hero3D';
import ProjectCard from '@/components/portfolio/ProjectCard';
import Timeline from '@/components/sections/Timeline';
import SkillsSection from '@/components/sections/Skills';
import ProjectModal from '@/components/portfolio/ProjectModal';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const fullText = 'Desenvolvedor Full Stack';

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: () => base44.entities.Project.list('-created_date'),
    initialData: []
  });

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/5511968578672', '_blank');
  };

  const skills = [
    'React', 'JavaScript', 'HTML/CSS', 'Node.js', 
    'TypeScript', 'Next.js', 'Tailwind CSS', 'Git'
  ];

  return (
    <div className="relative">
      {/* 3D Background */}
      <Hero3D />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-block animate-bounce">
                  <span className="text-cyan-400 font-semibold text-lg flex items-center gap-2 justify-center lg:justify-start">
                    <Sparkles className="w-5 h-5 animate-spin" />
                    Olá, eu sou
                  </span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold animate-fade-in">
                  <span className="gradient-text">Neemias</span>
                </h1>
                
                <div className="h-12 flex items-center justify-center lg:justify-start">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </h2>
                </div>

                <p className="text-xl text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up">
                  Transformo ideias em experiências digitais incríveis. 
                  Especializado em criar aplicações web modernas e responsivas.
                </p>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start flex-wrap animate-fade-in-up">
                <Button 
                  onClick={openWhatsApp}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6 glow-effect group hover:scale-110 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Vamos Conversar
                </Button>
                
                <Button 
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-6 glow-effect group hover:scale-110 transition-all duration-300"
                >
                  <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Ver Projetos
                </Button>
              </div>
            </div>

            {/* Character Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative float-animation group">
                {/* Animated rings for background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                
                {/* Substituído imagem pessoal por componente 3D/placeholder para evitar foto que não carrega */}
                <div className="relative w-80 md:w-96 h-auto rounded-3xl shadow-2xl border-4 border-white/10 transition-all duration-500">
                  <Hero3D />
                </div>
                
                {/* Floating particles around image */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500/30 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/4 -left-8 w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Sobre Mim</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Desenvolvedor apaixonado por tecnologia e inovação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <Code className="w-12 h-12 text-purple-500 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold mb-4 gradient-text">Experiência</h3>
                <p className="text-white/70 leading-relaxed">
                  Especializado em desenvolvimento web moderno, com foco em criar 
                  interfaces intuitivas e experiências de usuário excepcionais. 
                  Sempre busco as melhores práticas e tecnologias mais recentes.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <Sparkles className="w-12 h-12 text-blue-500 mb-4 animate-spin" style={{ animationDuration: '3s' }} />
                <h3 className="text-2xl font-bold mb-4 gradient-text">Paixão</h3>
                <p className="text-white/70 leading-relaxed">
                  Adoro transformar designs complexos em código limpo e eficiente. 
                  Meu objetivo é criar produtos que não apenas funcionem perfeitamente, 
                  mas também encantem os usuários.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-8 gradient-text">Habilidades</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:border-cyan-500/50 hover:scale-110 transition-all duration-300 group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Timeline Section */}
      <Timeline />
      
      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Meus Projetos</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Alguns dos trabalhos que desenvolvi com dedicação e paixão
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-white/5 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12 md:p-16 relative overflow-hidden hover:border-purple-500/50 transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
            
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                <span className="gradient-text">Vamos Trabalhar Juntos?</span>
              </h2>
              
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
                Estou sempre aberto a novos desafios e oportunidades. 
                Entre em contato e vamos criar algo incrível juntos!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                <Button 
                  onClick={openWhatsApp}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-lg px-10 py-7 glow-effect group/btn hover:scale-110 transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6 mr-2 group-hover/btn:rotate-12 transition-transform" />
                  Enviar Mensagem
                </Button>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-white/60 mb-4">Ou me encontre em:</p>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://github.com/neemiasgomes007-crypto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-500/50 hover:scale-125 hover:rotate-12 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.605-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </a>
                  <a
                    href={`https://wa.me/5511968578672`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-green-500/50 hover:scale-125 hover:rotate-12 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.93 11.93 0 0012 .5C5.65.5.99 5.16.99 11.5c0 2.12.56 4.09 1.62 5.85L.5 23.5l6.43-1.67a11.9 11.9 0 005.07 1.09c6.35 0 11.01-4.66 11.01-10.99 0-3-1.17-5.8-3.5-7.43zM12 21.98c-1.55 0-3.06-.37-4.39-1.07l-.31-.17-3.82.99.99-3.73-.2-.31A8.45 8.45 0 013.5 11.5C3.5 7.09 7.13 3.5 12 3.5s8.5 3.59 8.5 8-3.63 10-8.5 10z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
