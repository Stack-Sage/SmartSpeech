'use client';
import React from 'react';

export default function StudyCard({ title, description, imageUrl }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>
        <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
          Start Lesson
        </button>
      </div>
    </div>
  );
}
