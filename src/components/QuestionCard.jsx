'use client'

import { motion } from './motion';
import { useState, useRef, useEffect } from 'react';

function SkeletonQuestionCard() {
  return (
    <div className="animate-pulse ring-2 ring-amber-200/60 dark:ring-teal-400/30 rounded-2xl p-8 space-y-5 bg-gradient-to-br from-beige-50 via-amber-50 to-neutral-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-xl border border-amber-100 dark:border-gray-800 transition-all duration-300">
      <div className="h-6 w-40 bg-amber-100 dark:bg-teal-900 rounded" />
      <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
      <div className="h-8 w-full bg-gray-200 dark:bg-gray-800 rounded" />
    </div>
  );
}

export default function QuestionCard({ prompt, duration, loading = false }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const audioChunksRef = useRef([]);

  useEffect(() => {
    if (recording && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && mediaRecorder) {
      mediaRecorder.stop();
    }
  }, [recording, timeLeft]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);
    audioChunksRef.current = [];

    recorder.ondataavailable = (e) => audioChunksRef.current.push(e.data);
    recorder.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      const url = URL.createObjectURL(audioBlob);
      setAudioURL(url);

      // ⏱️ Record attempt timestamp
      const attemptTime = new Date().toLocaleString();
      setStartTime(attemptTime);

      // 📣 Simulate feedback (replace with actual score/tips API)
      setFeedback({
        score: Math.floor(Math.random() * 100),
        tips: 'Speak a bit slower and emphasize key words.',
        transcript: 'Simulated transcript goes here...',
      });

      // 📁 Optional: send audioBlob to backend via fetch/axios
    };

    recorder.start();
    setRecording(true);
    setTimeLeft(duration);
  };

  if (loading) return <SkeletonQuestionCard />;

  return (
    <motion.div
      className="ring-2 ring-amber-200/60 dark:ring-teal-400/30 rounded-2xl p-8 space-y-5 bg-gradient-to-br from-beige-50 via-amber-50 to-neutral-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-xl border border-amber-100 dark:border-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileTap={{ scale: 0.97 }}
      tabIndex={0}
      aria-label={`Question: ${prompt}`}
    >
      <p className="text-xl font-semibold text-amber-900 dark:text-zinc-100">{prompt}</p>

      <div className="text-center text-base text-neutral-700 dark:text-zinc-300 font-medium">
        Time left: <span className="font-bold text-amber-600 dark:text-teal-400">{timeLeft}s</span>
      </div>

      {!recording && (
        <motion.button
          onClick={startRecording}
          className="px-5 py-2 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-semibold rounded-lg shadow transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-teal-400"
          whileTap={{ scale: 0.95 }}
          aria-label={recording ? 'Recording in progress' : 'Start recording'}
        >
          Start Recording
        </motion.button>
      )}

      {audioURL && (
        <audio controls src={audioURL} className="mt-4 w-full rounded-lg shadow" aria-label="Playback recorded answer" />
      )}

      {feedback && (
        <div className="mt-6 border-t pt-4 text-base text-zinc-600 dark:text-zinc-200 space-y-2">
          <p><span className="font-semibold text-blue-600 dark:text-teal-400">Score:</span> {feedback.score}</p>
          <p><span className="font-semibold text-blue-600 dark:text-teal-400">Tips:</span> {feedback.tips}</p>
          <p><span className="font-semibold text-blue-600 dark:text-teal-400">Transcript:</span> {feedback.transcript}</p>
          <p><span className="font-semibold text-blue-600 dark:text-teal-400">Attempted on:</span> {startTime}</p>
        </div>
      )}
    </motion.div>
  );
}
