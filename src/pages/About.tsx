import React from 'react';
import { Coffee, Target, Lightbulb, Users, Code, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Coffee className="h-16 w-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl font-bold mb-4">About Caffeine AI</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Energizing businesses with AI solutions that work as quickly and effectively as your morning coffee.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-purple-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To revolutionize business operations by delivering AI solutions that provide an immediate boost to productivity and efficiency, just like that first cup of morning coffee. We're committed to making advanced AI technology accessible, intuitive, and energizing for businesses of all sizes.
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Lightbulb className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be the catalyst that awakens the full potential of businesses through AI, creating a world where every organization is empowered with intelligence that's as reliable and energizing as their daily caffeine fix. We envision a future where AI integration is as natural and essential as a cup of coffee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Users className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
              <p className="text-gray-600">
                Like a barista who knows your perfect brew, we understand and adapt to your unique needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Code className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly brew new ideas and solutions to keep you ahead of the competition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Rocket className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Speed & Efficiency</h3>
              <p className="text-gray-600">
                Quick to implement, instant results - just like your morning espresso shot.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;