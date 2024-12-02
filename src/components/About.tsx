import React from 'react';
import { Target, Users, Lightbulb, Rocket } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "Missão",
      description: "Transformar ideias em soluções digitais inovadoras que impulsionam o sucesso dos nossos clientes."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-500" />,
      title: "Visão",
      description: "Ser referência em inovação digital, criando experiências que inspiram e transformam o futuro."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Valores",
      description: "Excelência, criatividade, compromisso com resultados e foco no cliente."
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-500" />,
      title: "Inovação",
      description: "Buscamos constantemente novas tecnologias e tendências para oferecer soluções de ponta."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Sobre Nós</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Somos uma equipe apaixonada por tecnologia e inovação, 
              comprometida em criar soluções digitais que transformam negócios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Nossa História
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Fundada em 2020, a Espaço Roxo nasceu da paixão por criar 
                  experiências digitais extraordinárias. Nossa jornada começou 
                  com uma equipe pequena mas dedicada, e hoje somos referência 
                  em soluções tecnológicas inovadoras.
                </p>
                <p>
                  Com mais de 500 projetos entregues e clientes em todo o Brasil, 
                  nossa expertise abrange desde startups até grandes corporações, 
                  sempre mantendo o compromisso com a excelência e inovação.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Nossa equipe" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-purple-600/20 rounded-lg"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-purple-800/30 hover:border-purple-800 transition-all duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}