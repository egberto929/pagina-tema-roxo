import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-gray-900/20" />
      <div className="container mx-auto max-w-6xl relative">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Transforme Suas Ideias
            </span>
            <br />
            <span className="text-white">em Realidade Digital</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Criamos experiências digitais únicas que combinam design elegante com 
            tecnologia de ponta para impulsionar seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full flex items-center gap-2 transition-colors">
              Comece Agora
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-purple-400/10 transition-colors">
              Assista ao Vídeo
              <Play className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}