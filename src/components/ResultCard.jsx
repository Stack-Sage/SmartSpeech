// src/components/ResultCard.jsx

import React from 'react';
import { motion } from './motion';

function SkeletonResultCard() {
  return (
    <div className="animate-pulse bg-gradient-to-br from-beige-100 via-amber-50 to-neutral-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-xl rounded-2xl p-8 w-full max-w-md border border-amber-100 dark:border-gray-800 transition-all duration-300">
      <div className="flex items-center gap-5">
        <div className="h-10 w-10 bg-amber-200 dark:bg-teal-900 rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded" />
        </div>
      </div>
      <div className="mt-6 text-right">
        <div className="h-6 w-12 bg-amber-100 dark:bg-teal-900 rounded mx-auto" />
      </div>
    </div>
  );
}

const ResultCard = ({ title, score, description, icon, loading }) => {
  if (loading) return <SkeletonResultCard />;
  return (
    <motion.div
      className="bg-gradient-to-br from-beige-100 via-amber-50 to-neutral-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-xl rounded-2xl p-8 w-full max-w-md border border-amber-100 dark:border-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileTap={{ scale: 0.97 }}
      tabIndex={0}
      aria-label={`Result: ${title}, Score: ${score}`}
    >
      <div className="flex items-center gap-5">
        {icon && (
          <div className="text-4xl text-amber-500 dark:text-teal-400" aria-hidden="true">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-amber-900 dark:text-white group-focus:underline">{title}</h3>
          <p className="text-base text-neutral-700 dark:text-gray-300">{description}</p>
        </div>
      </div>
      <div className="mt-6 text-right">
        <span className="text-2xl font-extrabold text-amber-700 dark:text-teal-400">{score}</span>
      </div>
    </motion.div>
  );
};

export default ResultCard;
