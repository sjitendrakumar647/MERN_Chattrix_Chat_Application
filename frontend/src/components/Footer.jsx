import React from 'react';
import { Heart, Github, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-indigo-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Chattrix</h3>
            <p className="text-sm mt-2">Connect. Converse. Create.</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <nav className="mb-4 md:mb-0 md:mr-6">
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Contact</a></li>
              </ul>
            </nav>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>© 2025 Chattrix. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Made
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;