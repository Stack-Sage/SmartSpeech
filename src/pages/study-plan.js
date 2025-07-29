import StudyCard from '@/components/StudyCard';

const lessons = [
  {
    title: 'Mastering Pronunciation',
    description: 'Learn the nuances of clear English pronunciation with bite-sized techniques.',
    imageUrl: '/assets/pronunciation.jpg',
  },
  {
    title: 'Fluency Booster',
    description: 'Practice timed speaking drills to improve fluency and spontaneity.',
    imageUrl: '/assets/fluency.jpg',
  },
  {
    title: 'Grammar Essentials',
    description: 'Revise key grammar concepts with interactive examples and exercises.',
    imageUrl: '/assets/grammar.jpg',
  },
];

export default function StudyPlanPage() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-8">
      <h1 className="text-3xl font-bold text-center text-zinc-800 dark:text-white">
        Your Personalized Study Plan 🎯
      </h1>
      <p className="text-center text-zinc-500 dark:text-zinc-400 mb-6">
        Based on your progress and score trends, here are lessons curated just for you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {lessons.map((lesson, index) => (
          <StudyCard
            key={index}
            title={lesson.title}
            description={lesson.description}
            imageUrl={lesson.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
