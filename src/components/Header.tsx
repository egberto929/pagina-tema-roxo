import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900 border-b border-purple-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Espaço Roxo
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li><a href="#inicio" className="text-gray-300 hover:text-purple-400 transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-purple-400 transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-purple-400 transition-colors">Sobre</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-purple-400 transition-colors">Portfólio</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-purple-400 transition-colors">Contato</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-purple-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col gap-4">
              <li><a href="#inicio" className="text-gray-300 hover:text-purple-400 transition-colors block py-2">Início</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-purple-400 transition-colors block py-2">Serviços</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-purple-400 transition-colors block py-2">Sobre</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-purple-400 transition-colors block py-2">Portfólio</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-purple-400 transition-colors block py-2">Contato</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}