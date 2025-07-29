'use client';
import React from 'react';

// You can remove the mockScores once you're ready to pass real props
const mockScores = {
  Speaking: 85,
  Listening: 90,
  Pronunciation: 78,
};

export default function ScoreCard({ scores = mockScores }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300">
      {Object.entries(scores).map(([label, value]) => (
        <div key={label} className="text-center">
        <h3 className="text-base uppercase text-gray-500 dark:text-gray-400 tracking-wider">{label}</h3>
          <p className="text-3xl font-extrabold text-blue-600 dark:text-teal-400">{value}/100</p>
        </div>
      ))}
    </div>
  );
}
