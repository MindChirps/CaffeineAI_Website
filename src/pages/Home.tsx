import React from 'react';
import { ArrowRight, Brain, Zap, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Supercharge Your Business with AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Powerful AI solutions that energize your workflow like a shot of caffeine
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/products"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-colors duration-200 flex items-center"
              >
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Caffeine AI?
            </h2>
            <p className="text-xl text-gray-600">
              We deliver AI solutions that are powerful, reliable, and easy to implement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Brain className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Intelligent Solutions</h3>
              <p className="text-gray-600">
                Advanced AI algorithms that adapt and learn from your business needs
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Zap className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Rapid processing and real-time insights for immediate action
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Shield className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security with 99.9% uptime guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Energize Your Business?
          </h2>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-colors duration-200"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;