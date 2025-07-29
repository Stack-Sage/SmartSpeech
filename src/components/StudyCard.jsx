'use client';
import React from 'react';

export default function StudyCard({ title, description, imageUrl }) {
  return (
    <div className="bg-gradient-to-br from-beige-100 via-amber-50 to-neutral-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-[1.03] border border-amber-100 dark:border-gray-800">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-3xl"
        loading="lazy"
        style={{ filter: 'brightness(0.95) saturate(1.1)' }}
      />
      <div className="p-6 space-y-3">
        <h4 className="text-2xl font-bold text-amber-900 dark:text-white tracking-tight">
          {title}
        </h4>
        <p className="text-neutral-700 dark:text-gray-300 text-base leading-relaxed line-clamp-3">
          {description}
        </p>
        <button
          className="inline-block mt-2 px-5 py-2 bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-200 dark:from-blue-500 dark:via-teal-500 dark:to-purple-500 text-amber-900 dark:text-white text-base font-semibold rounded-lg shadow transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 dark:focus:ring-teal-400"
          aria-label={`Start lesson: ${title}`}
        >
           Start Lesson
        </button>
      </div>
    </div>
  );
}
