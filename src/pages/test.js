import QuestionCard from '@/components/QuestionCard';

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
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 space-y-8">
      <h1 className="text-3xl font-bold text-center text-zinc-800 dark:text-white">
        Speaking Test 🗣️
      </h1>
      <p className="text-center text-zinc-500 dark:text-zinc-400 mb-6">
        Answer the questions below. Try to speak clearly and within the time limit.
      </p>

      <div className="space-y-6">
        {mockQuestions.map((q) => (
          <QuestionCard
            key={q.id}
            prompt={q.prompt}
            duration={q.duration}
          />
        ))}
      </div>
    </div>
  );
}
