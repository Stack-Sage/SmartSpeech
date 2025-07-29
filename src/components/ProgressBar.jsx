'use client';

import { motion } from './motion';


export default function ProgressBar({ progress }) {
  // Ensure progress is a valid number between 0 and 100
  let safeProgress = 0;
  if (typeof progress === 'number' && !isNaN(progress)) {
    safeProgress = Math.min(100, Math.max(0, progress));
  }
  return (
    <div
      className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
      role="progressbar"
      aria-valuenow={safeProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
    >
      <motion.div
        className="h-full bg-blue-500"
        initial={{ width: 0 }}
        animate={{ width: `${safeProgress}%` }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
    </div>
  );
}
