'use client'
import ScoreCard from '@/components/ScoreCard';
import ProgressBar from '@/components/ProgressBar';
import StudyCard from '@/components/StudyCard';
import Graph from '@/components/Graph';
import { useSession } from 'next-auth/react';

export default function DashboardPage() {
  // const { data: session } = useSession();
  const session = { user: { name: "Adarsh" } };

  if (!session) {
    return (
      <div className="text-center mt-10 text-gray-600 dark:text-gray-300">
        🔐 You must be logged in to view this page.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-12">
      {/* Greeting */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-zinc-800 dark:text-white">
          Welcome back, {session.user.name} 👋
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Here’s a quick overview of your progress and learning activity.
        </p>
      </div>

      {/* Score Summary */}
      <section>
        <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-4">
          Your Scores
        </h2>
        <ScoreCard />
      </section>

      {/* Progress + Graph (side by side on large screens) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-4">
            Study Progress
          </h2>
          <ProgressBar />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-4">
            Performance Trends
          </h2>
          <Graph />
        </div>
      </section>

      {/* Study Plan */}
      <section>
        <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-4">
          Recommended Study Plan
        </h2>
        <StudyCard />
      </section>
    </div>
  );
}
