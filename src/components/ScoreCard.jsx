'use client';
import React from 'react';

export default function ScoreCard({ scores }) {
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
