'use client'

import ScoreCard from '@/components/ScoreCard';
import ProgressBar from '@/components/ProgressBar';
import StudyCard from '@/components/StudyCard';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import { motion, AnimatePresence } from '@/components/motion';

const Graph = dynamic(() => import('@/components/Graph'), { ssr: false });

export default function DashboardPage() {
  // const { data: session } = useSession();
  const session = { user: { name: "Adarsh" } };

  if (!session) {
    return (
      <div className="text-center mt-10 text-gray-600 dark:text-gray-300">
        🔐 You must be logged in to view this page.
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 py-10 px-4 space-y-12 transition-colors duration-500">
      {/* Greeting */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            className="rounded-full bg-gradient-to-br from-blue-500/60 to-teal-400/60 p-2 shadow-lg mb-2"
          >
            <span className="text-4xl">👋</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-800 dark:text-white tracking-tight drop-shadow-lg">
            Welcome back, {session.user.name}
          </h1>
          <motion.p
            className="mt-2 text-lg text-gray-500 dark:text-gray-300 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Here’s a quick overview of your progress and learning activity.
          </motion.p>
        </div>
      </motion.div>

      {/* Score Summary */}
      <motion.section
        className="max-w-4xl mx-auto backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 tracking-wide flex items-center gap-2">
          <span className="inline-block"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3"><path d="M3 3v18h18"/><rect width="3" height="8" x="7" y="10" rx="1"/><rect width="3" height="5" x="14" y="13" rx="1"/><rect width="3" height="14" x="21" y="4" rx="1"/></svg></span>
          Your Scores
        </h2>
        <ScoreCard />
      </motion.section>

      {/* Progress + Graph (side by side on large screens) */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ scale: 1.02, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
        >
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 tracking-wide flex items-center gap-2">
            <span className="inline-block"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></span>
            Study Progress
          </h2>
          <ProgressBar />
        </motion.div>
        <motion.div
          className="backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.02, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
        >
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 tracking-wide flex items-center gap-2">
            <span className="inline-block"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></span>
            Performance Trends
          </h2>
          <Graph />
        </motion.div>
      </section>

      {/* Study Plan */}
      <motion.section
        className="max-w-4xl mx-auto backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        whileHover={{ scale: 1.01, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
      >
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 tracking-wide flex items-center gap-2">
          <span className="inline-block"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M2 7V19a2 2 0 0 0 2 2h14"/><path d="M22 7V19a2 2 0 0 1-2 2H6"/><path d="M2 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"/><path d="M22 7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"/></svg></span>
          Recommended Study Plan
        </h2>
        <StudyCard />
      </motion.section>
    </div>
  );
}
