import { useState, useRef } from "react";
import { FiMic, FiStopCircle, FiPlayCircle } from "react-icons/fi";

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioChunksRef.current = [];
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      const url = URL.createObjectURL(audioBlob);
      setAudioURL(url);
    };

    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <section className="py-16 px-6 md:px-20 text-center bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Try a Speaking Test
      </h2>
      <p className="mb-10 text-gray-600 dark:text-gray-300">
        Record your voice and receive real-time AI-powered feedback.
      </p>

      <div className="flex justify-center gap-6">
        {!recording ? (
          <button
            onClick={startRecording}
            className="p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition"
          >
            <FiMic size={32} />
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="p-4 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition"
          >
            <FiStopCircle size={32} />
          </button>
        )}

        {audioURL && (
          <a
            href={audioURL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition"
          >
            <FiPlayCircle size={32} />
          </a>
        )}
      </div>
    </section>
  );
};

export default AudioRecorder;
