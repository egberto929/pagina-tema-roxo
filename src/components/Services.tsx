import React from 'react';
import { Palette, Code, Smartphone, Gauge } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Palette className="w-12 h-12 text-purple-500" />,
      title: "Design UI/UX",
      description: "Interfaces intuitivas e modernas que encantam seus usuários"
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: "Desenvolvimento Web",
      description: "Websites responsivos e otimizados para todos os dispositivos"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-purple-500" />,
      title: "Apps Mobile",
      description: "Aplicativos nativos para iOS e Android com performance excepcional"
    },
    {
      icon: <Gauge className="w-12 h-12 text-purple-500" />,
      title: "Otimização SEO",
      description: "Melhore seu ranking nos mecanismos de busca"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Nossos Serviços</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferecemos soluções completas para sua presença digital
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl bg-gray-800 hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}