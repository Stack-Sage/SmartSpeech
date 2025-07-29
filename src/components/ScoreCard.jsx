'use client';

import React from 'react';
import { motion } from './motion';

const mockScores = {
  Speaking: 85,
  Listening: 90,
  Pronunciation: 78,
};

function SkeletonCard() {
  return (
    <div className="animate-pulse text-center space-y-2">
      <div className="h-4 w-16 mx-auto bg-gray-300 dark:bg-gray-700 rounded" />
      <div className="h-8 w-20 mx-auto bg-blue-200 dark:bg-teal-900 rounded" />
    </div>
  );
}

export default function ScoreCard({ scores = mockScores, loading = false }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      tabIndex={0}
      aria-label="Score summary"
    >
      {(loading ? [1,2,3] : Object.entries(scores)).map((item, idx) => (
        loading ? (
          <SkeletonCard key={idx} />
        ) : (
          <motion.div
            key={item[0]}
            className="text-center cursor-pointer group"
            whileTap={{ scale: 0.96 }}
            tabIndex={0}
            aria-label={`${item[0]} score: ${item[1]}`}
          >
            <h3 className="text-base uppercase text-gray-500 dark:text-gray-400 tracking-wider group-focus:underline">{item[0]}</h3>
            <p className="text-3xl font-extrabold text-blue-600 dark:text-teal-400">{item[1]}/100</p>
          </motion.div>
        )
      ))}
    </motion.div>
  );
}
