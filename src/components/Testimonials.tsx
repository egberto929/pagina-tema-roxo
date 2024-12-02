import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "A equipe do Espaço Roxo transformou completamente nossa presença digital. O resultado superou todas as expectativas!",
      author: "Ana Silva",
      role: "Diretora de Marketing",
      company: "Tech Solutions"
    },
    {
      quote: "O melhor investimento que fizemos em tecnologia. A interface é linda e a performance é excepcional.",
      author: "Carlos Santos",
      role: "CEO",
      company: "Inovação Digital"
    },
    {
      quote: "Profissionalismo e criatividade em cada detalhe. Recomendo fortemente para qualquer empresa.",
      author: "Marina Costa",
      role: "Gerente de Produto",
      company: "StartUp BR"
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Depoimentos
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          O que nossos clientes dizem sobre nosso trabalho
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg border border-purple-800/30 hover:border-purple-800 transition-all duration-300">
              <Quote className="w-8 h-8 text-purple-500 mb-6" />
              <p className="text-gray-300 mb-6 text-lg italic">{testimonial.quote}</p>
              <div>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-purple-400">{testimonial.role}</p>
                <p className="text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}