import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Shield, Zap, Smile, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';

const features = [
  {
    icon: <MessageSquare className="w-8 h-8 text-indigo-400" />,
    title: 'Real-Time Messaging',
    description: 'Instant message delivery for seamless conversations.',
  },
  {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: 'Group Chats',
    description: 'Create and manage group conversations with ease.',
  },
  {
    icon: <Shield className="w-8 h-8 text-red-400" />,
    title: 'End-to-End Encryption',
    description: 'Your messages are secure and private.',
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: 'Instant File Sharing',
    description: 'Share files, images, and documents in a flash.',
  },
  {
    icon: <Smile className="w-8 h-8 text-pink-400" />,
    title: 'Rich Emojis & Stickers',
    description: 'Express yourself with a wide range of emojis and stickers.',
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    title: 'Cross-Platform Sync',
    description: 'Access your chats from any device, anywhere.',
  },
];

function FeatureCard({ icon, title, description, index }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      {icon}
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </motion.div>
  );
}

function FeatureShowcase() {
  return (
    <section className="w-full h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex flex-col relative overflow-hidden">
      <Navbar/>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12 mt-15">
          Discover Chattrix Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureShowcase;