import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import Profilesection from './Profilesection';
import Logout from '../chatapp/Logout';

function ChatNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 py-4 z-20 relative shadow-lg bg-indigo-700">
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <Menu className="w-6 h-6 text-white cursor-pointer" />
          </button>
        </div>

        <div className="flex items-center gap-2 text-white">
          <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
          <span className="text-2xl font-bold tracking-tight">Chattrix</span>
        </div>

        <div className="flex gap-2">
          <Logout/>
        </div>
      </nav>

      {/* Slide-in Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-indigo-900 text-white z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white">
          <h2 className="text-lg font-bold">Welcome to Chattrix</h2>
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6 text-white cursor-pointer" />
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col justify-center items-center text-center text-white">
          <Profilesection />
        </div>
      </div>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default ChatNavbar;
