// Navbar.jsx
import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 z-20 relative shadow-lg">
      <div className="flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
        <span className="text-2xl font-bold tracking-tight">Chattrix</span>
      </div>

      <div className="hidden md:flex gap-6 text-white font-medium">
        <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
        <Link to="/features" className="hover:text-yellow-300 transition-colors">Features</Link>
        <Link to="/about" className="hover:text-yellow-300 transition-colors">About</Link>
        <Link to="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link>
      </div>
      <button 
        className="hidden md:block bg-white text-indigo-700 px-4 py-2 rounded-xl font-semibold hover:bg-yellow-300 hover:text-indigo-900 transition-colors cursor-pointer"
      >
        <Link to="/chatapp">Chat App</Link>
      </button>
      <div className='flex gap-2'>
        <button 
        className="hidden md:block bg-white text-indigo-700 px-4 py-2 rounded-xl font-semibold hover:bg-yellow-300 hover:text-indigo-900 transition-colors cursor-pointer"
        onClick={() => document.getElementById('my_modal_1').showModal()}
      >
        Login
      </button>
      <button 
        className="hidden md:block bg-yellow-300 text-indigo-700 px-4 py-2 rounded-xl font-semibold hover:bg-white hover:text-indigo-900 transition-colors cursor-pointer"
        onClick={() => document.getElementById('my_modal_2').showModal()}
      >
        Register
      </button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-indigo-700 bg-opacity-95 flex flex-col items-center py-4 gap-4 z-30 md:hidden text-white">
          <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
          <Link to="/features" className="hover:text-yellow-300 transition-colors">Features</Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link>
          <button 
            className="bg-white text-indigo-700 px-4 py-2 rounded-xl font-semibold hover:bg-yellow-300 hover:text-indigo-900 transition-colors cursor-pointer"
            onClick={() => document.getElementById('my_modal_1').showModal()}
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
