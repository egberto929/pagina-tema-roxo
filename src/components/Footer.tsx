import { Github, Twitter, Linkedin, Instagram, Sparkles } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Espaço Roxo
              </span>
            </div>
            <p className="text-gray-400">
              Criando experiências digitais únicas e memoráveis para transformar sua presença online.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Design UI/UX</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Apps Mobile</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Marketing Digital</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Espaço Roxo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}