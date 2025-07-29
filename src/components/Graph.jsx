'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// 🎨 Fallback mock data for preview
const mockData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  label: 'Speaking Score',
  values: [78, 82, 85, 90, 88],
};

export default function Graph({ data = mockData }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: data.label,
        data: data.values,
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
      <Line data={chartData} />
    </div>
  );
}
