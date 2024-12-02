import { Lightbulb, Code2, Rocket, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    icon: <Lightbulb className="w-12 h-12 text-purple-500" />,
    title: "Descoberta",
    description: "Entendemos suas necessidades e objetivos através de uma análise detalhada"
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-purple-500" />,
    title: "Planejamento",
    description: "Desenvolvemos uma estratégia personalizada para seu projeto"
  },
  {
    icon: <Code2 className="w-12 h-12 text-purple-500" />,
    title: "Desenvolvimento",
    description: "Transformamos ideias em código com as melhores práticas"
  },
  {
    icon: <Rocket className="w-12 h-12 text-purple-500" />,
    title: "Lançamento",
    description: "Entregamos seu projeto otimizado e pronto para crescer"
  }
];

export function Process() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Nosso Processo</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Metodologia comprovada para entregar resultados excepcionais
          </p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-gray-800 p-8 rounded-lg border border-purple-800/30 hover:border-purple-800 transition-all duration-300">
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-800/30" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}