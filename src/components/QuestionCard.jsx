'use client'
import { useState, useEffect, useRef } from 'react';

export default function QuestionCard({ prompt, duration }) {
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

  return (
    <div className="ring-2 ring-neutral-700 rounded-xl p-6 space-y-4 bg-white dark:bg-zinc-900 shadow">
      <p className="text-lg text-zinc-700 dark:text-zinc-100">{prompt}</p>

      <div className="text-center text-sm text-zinc-500 dark:text-zinc-400">
        Time left: {timeLeft}s
      </div>

      {!recording && (
        <button
          onClick={startRecording}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Start Recording
        </button>
      )}

      {audioURL && (
        <audio controls src={audioURL} className="mt-4 w-full" />
      )}

      {feedback && (
        <div className="mt-4 border-t pt-4 text-sm text-zinc-600 dark:text-zinc-300 space-y-2">
          <p><strong>Score:</strong> {feedback.score}</p>
          <p><strong>Tips:</strong> {feedback.tips}</p>
          <p><strong>Transcript:</strong> {feedback.transcript}</p>
          <p><strong>Attempted on:</strong> {startTime}</p>
        </div>
      )}
    </div>
  );
}
