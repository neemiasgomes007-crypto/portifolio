import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-[#0a0e27] w-full max-w-4xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Conteúdo */}
        <div className="p-6">
          {/* Imagem */}
          <div className="rounded-lg overflow-hidden aspect-video mb-6">
            <img 
              src={project.image_url} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <h3 className="text-3xl font-bold mb-4 gradient-text">
            {project.title}
          </h3>

          <p className="text-white/70 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-colors"
          >
            Ver Projeto
          </a>
        </div>
      </div>
    </div>
  );
}