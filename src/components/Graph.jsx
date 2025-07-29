'use client';

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';
import { motion } from './motion';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// 🎨 Fallback mock data for preview
const mockData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  label: 'Speaking Score',
  values: [78, 82, 85, 90, 88],
};

function isValidData(data) {
  return (
    data &&
    Array.isArray(data.labels) &&
    typeof data.label === 'string' &&
    Array.isArray(data.values)
  );
}

function SkeletonGraph() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow animate-pulse flex flex-col gap-4">
      <div className="h-6 w-32 bg-gray-700 rounded" />
      <div className="h-40 w-full bg-gray-800 rounded" />
    </div>
  );
}

export default function Graph({ data, loading = false }) {
  const [showSkeleton, setShowSkeleton] = useState(true);
  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => setShowSkeleton(false), 600);
      return () => clearTimeout(t);
    }
  }, [loading]);

  const safeData = isValidData(data) ? data : mockData;

  const chartData = {
    labels: safeData.labels,
    datasets: [
      {
        label: safeData.label,
        data: safeData.values,
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  if (loading || showSkeleton) return <SkeletonGraph />;

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      tabIndex={0}
      aria-label="Performance trends graph"
    >
      <Line data={chartData} />
    </motion.div>
  );
}
