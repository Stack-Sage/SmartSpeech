// src/components/ResultCard.jsx
import React from 'react';

const ResultCard = ({ title, score, description, icon }) => {
  return (
    <div className="bg-gradient-to-br from-beige-100 via-amber-50 to-neutral-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-xl rounded-2xl p-8 w-full max-w-md border border-amber-100 dark:border-gray-800 transition-all duration-300">
      <div className="flex items-center gap-5">
        {icon && (
          <div className="text-4xl text-amber-500 dark:text-teal-400">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-amber-900 dark:text-white">{title}</h3>
          <p className="text-base text-neutral-700 dark:text-gray-300">{description}</p>
        </div>
      </div>
      <div className="mt-6 text-right">
        <span className="text-2xl font-extrabold text-amber-700 dark:text-teal-400">{score}</span>
      </div>
    </div>
  );
};

export default ResultCard;
