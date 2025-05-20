import React from 'react';
import { motion } from "framer-motion";
import { MessageSquare, Users, Shield } from "lucide-react";
import Navbar from '../components/Navbar';

function About() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex flex-col relative overflow-hidden">
        <Navbar/>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mt-15 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Chattrix
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-white mb-6">
              Chattrix aims to provide a seamless and secure chat experience, 
              connecting people across the globe. We believe in the power of 
              communication to bring people together and foster understanding.
            </p>
            <p className="text-white">
              Our platform is designed with user privacy and ease of use in mind, 
              ensuring that you can focus on what matters most - your conversations.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <MessageSquare className="w-12 h-12 text-indigo-500 mr-4" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Real-Time Chat</h4>
                <p className="text-gray-600">Instant messaging for quick and efficient communication.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <Users className="w-12 h-12 text-green-500 mr-4" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Group Conversations</h4>
                <p className="text-gray-600">Create and manage group chats with ease.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <Shield className="w-12 h-12 text-red-500 mr-4" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Secure Messaging</h4>
                <p className="text-gray-600">End-to-end encryption for your privacy and security.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;