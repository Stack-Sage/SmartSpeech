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

import { motion } from '@/components/motion';

export default function TestPage() {
  const router = useRouter();

  const handleFinishTest = () => { 
    router.push('/results');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 py-10 px-4 space-y-10 transition-colors duration-500">
      <motion.div
        className="max-w-4xl mx-auto mb-8 backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-zinc-800 dark:text-white tracking-tight">
            Speaking Test 🧠
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Speak clearly and confidently. Each question has a time limit.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="max-w-4xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {mockQuestions.map((q) => (
          <QuestionCard
            key={q.id}
            prompt={q.prompt}
            duration={q.duration}
          />
        ))}
      </motion.div>
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
