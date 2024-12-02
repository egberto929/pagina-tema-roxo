import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const clients = [
  {
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80",
  },
  {
    name: "InnovaSoft",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80",
  },
  {
    name: "Digital Solutions",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80",
  },
  {
    name: "Future Systems",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80",
  }
];

export function Clients() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Empresas que Confiam em Nós</h2>
          <p className="text-gray-400">Parceiros que fazem parte da nossa história de sucesso</p>
        </div>
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}