import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ExternalLink, Code } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative overflow-hidden bg-white/5 border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative p-6 h-full flex flex-col">
        {/* Project Image */}
        {project.image_url && (
          <div className="mb-6 rounded-lg overflow-hidden aspect-video bg-white/5">
            <img 
              src={project.image_url} 
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        )}

        {/* Icon */}
        <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Code className="w-6 h-6 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 gradient-text">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/70 mb-4 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="border-white/20 text-white/80 bg-white/5"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium group/link mt-auto"
        >
          <span>Ver Projeto</span>
          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </a>

        {/* Decorative elements */}
        <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>
    </Card>
  );
}
