import QuestionCard from '@/components/QuestionCard';
import { useRouter } from 'next/router';

const mockQuestions = [
  {
    id: 1,
    prompt: 'Describe your favorite season and why you enjoy it.',
    type: 'spoken',
    duration: 45,
  },
  {
    id: 2,
    prompt: 'Talk about a memorable trip you’ve taken. What made it special?',
    type: 'spoken',
    duration: 60,
  },
  {
    id: 3,
    prompt: 'Do you think technology helps or hinders communication?',
    type: 'spoken',
    duration: 60,
  },
];

export default function TestPage() {
  const router = useRouter();

  const handleFinishTest = () => { 
    router.push('/results');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 max-w-5xl mx-auto py-10 px-4 space-y-10 transition-colors duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-zinc-800 dark:text-white tracking-tight">
          Speaking Test 🧠
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Speak clearly and confidently. Each question has a time limit.
        </p>
      </div>

      <div className="space-y-8">
        {mockQuestions.map((q) => (
          <QuestionCard
            key={q.id}
            prompt={q.prompt}
            duration={q.duration}
          />
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <button
          onClick={handleFinishTest}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Finish Test & View Results
        </button>
      </div>
    </div>
  );
}
