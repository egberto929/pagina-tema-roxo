import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of users who have already transformed their projects with our platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-purple-900 px-8 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors">
            Try it Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors">
            Contact Sales
            <Mail className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}