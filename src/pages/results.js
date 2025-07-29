import ResultCard from '@/components/ResultCard';

const mockResults = [
  {
    id: 1,
    title: 'Winter Season',
    description: 'I love winter because of the chilly weather and cozy vibes...',
    score: '78%',
    icon: '❄️',
  },
  {
    id: 2,
    title: 'Trip to the Himalayas',
    description: 'Last year I visited the Himalayas, and the views were breathtaking...',
    score: '85%',
    icon: '🏔️',
  },
];

const handleDownload = () => {
  const blob = new Blob([JSON.stringify(mockResults, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'speech_test_results.json';
  a.click();
  URL.revokeObjectURL(url);
};

export default function ResultPage() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-zinc-800 dark:text-white tracking-tight">
          Your Test Results ✅
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Review your performance and insights. You can download your results below.
        </p>

        <button
          onClick={handleDownload}
          className="mt-4 px-5 py-2 bg-emerald-600 text-white font-medium rounded hover:bg-emerald-700 transition"
        >
          Download Results
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockResults.map((result) => (
          <ResultCard
            key={result.id}
            title={result.title}
            description={result.description}
            score={result.score}
            icon={result.icon}
          />
        ))}
      </div>
    </div>
  );
}
