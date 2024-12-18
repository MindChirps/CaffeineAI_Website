import React from 'react';
import { Coffee, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Coffee className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold">Caffeine AI</span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering humanity through innovative AI solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-purple-400">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-purple-400">Products</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-purple-400">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-gray-400">info@caffeineai.xyz</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-gray-400">+91 9677213091</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-gray-400">Chennai, TN, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest AI innovations</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Caffeine AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;