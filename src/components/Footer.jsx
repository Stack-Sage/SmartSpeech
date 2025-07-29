import React from "react";
import Link from "next/link";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

    
        <div>
          <Link
            href="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          >
            SpeakSmart
          </Link>
          <p className="mt-4 text-sm">
            AI-powered speaking tests & personalized feedback that actually work.
          </p>
        </div>

 
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/test" className="hover:text-green-500 transition">Take Test</Link></li>
            <li><Link href="/study-plan" className="hover:text-green-500 transition">Study Plan</Link></li>
            <li><Link href="/dashboard" className="hover:text-green-500 transition">Dashboard</Link></li>
            <li><Link href="/login" className="hover:text-green-500 transition">Login</Link></li>
            <li><Link href="/signup" className="hover:text-green-500 transition">Sign Up</Link></li>
          </ul>
        </div>


        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4 text-2xl">
            <Link href="https://twitter.com" className="hover:text-green-500 transition" target="_blank">
              <FiTwitter />
            </Link>
            <Link href="https://github.com" className="hover:text-green-500 transition" target="_blank">
              <FiGithub />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-green-500 transition" target="_blank">
              <FiLinkedin />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm border-t border-gray-300 dark:border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} SpeakSmart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
