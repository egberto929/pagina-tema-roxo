import { Send } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900/50 to-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Receba Novidades e Atualizações
          </h3>
          <p className="text-gray-300 mb-8">
            Inscreva-se em nossa newsletter para receber dicas, tutoriais e novidades do mundo digital
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="px-6 py-3 bg-gray-800 border border-purple-800/30 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white w-full sm:w-96"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
            >
              Inscrever
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}