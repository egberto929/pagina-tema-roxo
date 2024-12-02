import { Shield, Zap, Star } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Secure',
      description: 'Built with security in mind from the ground up'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance'
    },
    {
      icon: <Star className="w-8 h-8 text-purple-500" />,
      title: 'Premium Quality',
      description: 'Crafted with attention to every detail'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}