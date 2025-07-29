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
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow">
      {Object.entries(scores).map(([label, value]) => (
        <div key={label} className="text-center">
          <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400">{label}</h3>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{value}/100</p>
        </div>
      ))}
    </div>
  );
}
