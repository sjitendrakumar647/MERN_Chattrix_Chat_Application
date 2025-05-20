import React from 'react';
import { motion } from "framer-motion"; 
import { Sparkles, MessageSquare, Users, ShieldCheck } from "lucide-react";
import Navbar from './Navbar';

function Banner() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex flex-col relative overflow-hidden">
      <Navbar/>

      {/* Background Glow Circles */}
      <div className="absolute w-72 h-72 bg-pink-400 opacity-20 rounded-full top-10 left-10 blur-3xl animate-pulse" />
      <div className="absolute w-72 h-72 bg-indigo-400 opacity-20 rounded-full bottom-10 right-10 blur-3xl animate-pulse" />

      {/* Banner Content */}
      <motion.div
        className="text-center max-w-2xl mx-auto flex-grow flex flex-col justify-center z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
          <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-xl">
            Chattrix
          </h1>
        </div>
        <p className="text-xl font-light mb-6 drop-shadow-md">
          Connect. Converse. Create. A smarter, sleeker way to chat in real-time.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-indigo-700 transition-colors">
            Learn More
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-4 rounded-xl text-gray-900 flex flex-col items-center shadow-md">
            <MessageSquare className="w-8 h-8 mb-2 text-sky-300" />
            <h3 className="font-bold text-lg">Real-Time Chat</h3>
            <p className="text-sm">Send and receive messages instantly.</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-4 rounded-xl text-gray-900 flex flex-col items-center shadow-md">
            <Users className="w-8 h-8 mb-2 text-green-300" />
            <h3 className="font-bold text-lg">Group Conversations</h3>
            <p className="text-sm">Connect with friends, teams, or communities.</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-4 rounded-xl text-gray-900 flex flex-col items-center shadow-md">
            <ShieldCheck className="w-8 h-8 mb-2 text-purple-300" />
            <h3 className="font-bold text-lg">Secure Messaging</h3>
            <p className="text-sm">End-to-end encryption for privacy.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Banner;