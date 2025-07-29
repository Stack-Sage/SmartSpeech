// src/components/ResultCard.jsx
import React from 'react';

const ResultCard = ({ title, score, description, icon }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow-md rounded-xl p-6 w-full max-w-md">
      <div className="flex items-center gap-4">
        {icon && (
          <div className="text-3xl text-blue-500 dark:text-blue-400">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
      <div className="mt-4 text-right">
        <span className="text-xl font-bold text-green-600 dark:text-green-400">{score}</span>
      </div>
    </div>
  );
};

export default ResultCard;
