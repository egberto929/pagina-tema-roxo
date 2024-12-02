import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const technologies = [
  { name: "React", icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" },
  { name: "TypeScript", icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" },
  { name: "Node.js", icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" },
  { name: "Python", icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" },
  { name: "AWS", icon: "https://raw.githubusercontent.com/github/explore/fbceb94436312b6dacde68d122a5b9c7d11f9524/topics/aws/aws.png" },
  { name: "Docker", icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png" }
];

export function Technologies() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Tecnologias</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Utilizamos as tecnologias mais modernas e eficientes do mercado
          </p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-gray-900 p-6 rounded-lg w-full aspect-square flex items-center justify-center hover:bg-gray-750 transition-all duration-300">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="mt-4 text-white font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}