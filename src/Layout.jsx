import React from 'react';
import { useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
import { MessageCircle } from 'lucide-react';
import { Button } from './components/ui/button';

export default function Layout({ children }) {
  const location = useLocation();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511968578672', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white relative overflow-x-hidden">
      <style>{`
        :root {
          --primary: #6366f1;
          --secondary: #8b5cf6;
          --accent: #06b6d4;
          --pink: #ec4899;
        }
        
        * {
          scroll-behavior: smooth;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glow-effect {
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.4); }
          50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.8); }
        }

        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0e27]/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity hover:scale-110 duration-300"
            >
              Neemias
            </button>

            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white/80 hover:text-white transition-colors hover:scale-110 duration-300"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-white/80 hover:text-white transition-colors hover:scale-110 duration-300"
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white/80 hover:text-white transition-colors hover:scale-110 duration-300"
              >
                Contato
              </button>
            </div>

            <Button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white pulse-glow hover:scale-110 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-125 transition-all duration-300 pulse-glow group"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
      </button>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#070a1f] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">Neemias</h3>
              <p className="text-white/60">
                Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-white/60 hover:text-white transition-colors hover:translate-x-2 duration-300">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('projects')} className="block text-white/60 hover:text-white transition-colors hover:translate-x-2 duration-300">
                  Projetos
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-white/60 hover:text-white transition-colors hover:translate-x-2 duration-300">
                  Contato
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <Button 
                  onClick={openWhatsApp}
                  variant="outline"
                  className="w-full justify-start border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <a 
                  href="https://www.instagram.com/neemias_dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>
                  @neemias_dev
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40">
            <p>© 2025 Neemias. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
