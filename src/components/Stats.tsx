import { Users, Code2, Award, Heart } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      value: "500+",
      label: "Clientes Satisfeitos",
      description: "Empresas que confiam em nosso trabalho"
    },
    {
      icon: <Code2 className="w-8 h-8 text-purple-500" />,
      value: "1000+",
      label: "Projetos Entregues",
      description: "Soluções desenvolvidas com excelência"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      value: "50+",
      label: "Prêmios Recebidos",
      description: "Reconhecimento internacional"
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-500" />,
      value: "99%",
      label: "Taxa de Satisfação",
      description: "Avaliações positivas dos clientes"
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-purple-800/30 hover:border-purple-800 transition-colors"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-purple-400 mb-2">{stat.label}</div>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}