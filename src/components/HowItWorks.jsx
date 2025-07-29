'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const steps = [
  {
    title: 'Record Your Speech',
    description: 'Use our sleek AudioRecorder to capture your spoken English.',
  },
  {
    title: 'AI-Powered Analysis',
    description: 'Receive instant feedback on pronunciation, fluency, and grammar.',
  },
  {
    title: 'Tailored Study Plan',
    description: 'Dive into curated lessons to strengthen weak areas.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 sm:px-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
        >
          How SpeakSmart Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 dark:text-gray-300 text-lg mb-12"
        >
          Speak. Analyze. Improve. Our process is designed to make learning intuitive and effective.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300"
            >
              <CheckCircleIcon className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
