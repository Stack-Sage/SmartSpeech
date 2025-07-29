import React from "react";
import Link from "next/link";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-14 shadow-2xl border-t border-gray-800">
      <motion.div 
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >

    
        <div>
          <Link
            href="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
          >
            SpeakSmart
          </Link>
          <p className="mt-4 text-base text-gray-400">
            AI-powered speaking tests & personalized feedback that actually work.
          </p>
        </div>

 
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-base">
            <li><Link href="/test" className="hover:text-green-400 transition-colors">Take Test</Link></li>
            <li><Link href="/study-plan" className="hover:text-green-400 transition-colors">Study Plan</Link></li>
            <li><Link href="/dashboard" className="hover:text-green-400 transition-colors">Dashboard</Link></li>
            <li><Link href="/login" className="hover:text-green-400 transition-colors">Login</Link></li>
            <li><Link href="/signup" className="hover:text-green-400 transition-colors">Sign Up</Link></li>
          </ul>
        </div>


        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
          <div className="flex space-x-6 text-2xl">
            <Link href="https://twitter.com" className="hover:text-blue-400 transition-colors" target="_blank"><FiTwitter /></Link>
            <Link href="https://github.com" className="hover:text-gray-100 transition-colors" target="_blank"><FiGithub /></Link>
            <Link href="https://linkedin.com" className="hover:text-blue-300 transition-colors" target="_blank"><FiLinkedin /></Link>
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="mt-10 text-center text-sm border-t border-gray-700 pt-6 text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        &copy; {new Date().getFullYear()} SpeakSmart. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
