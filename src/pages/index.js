

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { motion } from '../components/motion';
import { useState, useEffect } from "react";


export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-x-hidden">
      {/* Animated background particles */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <svg className="absolute animate-pulse left-1/4 top-1/4 opacity-30" width="400" height="400">
          <circle cx="200" cy="200" r="120" fill="url(#grad1)" />
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
        <svg className="absolute animate-pulse right-1/4 bottom-1/4 opacity-20" width="300" height="300">
          <circle cx="150" cy="150" r="90" fill="url(#grad2)" />
          <defs>
            <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a21caf" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <main className="pt-16 relative z-10">
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          {loading ? (
            <div className="h-[400px] w-full flex items-center justify-center bg-gradient-to-br from-slate-800/40 to-slate-900/30 rounded-3xl animate-pulse mb-8" aria-label="Loading hero section" />
          ) : (
            <Hero />
          )}
        </motion.div>
        {/* Features Section */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
          {loading ? (
            <div className="h-48 w-full flex items-center justify-center bg-gradient-to-br from-slate-800/30 to-slate-900/20 rounded-2xl animate-pulse mb-8" aria-label="Loading features section" />
          ) : (
            <Features />
          )}
        </motion.div>
        {/* How It Works Section */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
          {loading ? (
            <div className="h-40 w-full flex items-center justify-center bg-gradient-to-br from-slate-800/20 to-slate-900/10 rounded-2xl animate-pulse mb-8" aria-label="Loading how it works section" />
          ) : (
            <HowItWorks />
          )}
        </motion.div>
        {/* Testimonials Section */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
          {loading ? (
            <div className="h-32 w-full flex items-center justify-center bg-gradient-to-br from-slate-800/10 to-slate-900/5 rounded-2xl animate-pulse mb-8" aria-label="Loading testimonials section" />
          ) : (
            <Testimonials />
          )}
        </motion.div>
        {/* CTA Section */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
          {loading ? (
            <div className="h-28 w-full flex items-center justify-center bg-gradient-to-br from-slate-800/10 to-slate-900/5 rounded-2xl animate-pulse mb-8" aria-label="Loading CTA section" />
          ) : (
            <CTASection />
          )}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
