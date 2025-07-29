'use client';
import React from 'react';

export default function StudyCard({ title, description, imageUrl }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-[1.02]">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-5 space-y-3">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-white tracking-tight">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        <button
          className="inline-block mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label={`Start lesson: ${title}`}
        >
           Start Lesson
        </button>
      </div>
    </div>
  );
}
