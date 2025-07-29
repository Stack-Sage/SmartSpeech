import { FiMic, FiBarChart2, FiActivity, FiCheckCircle } from "react-icons/fi";

const features = [
  {
    icon: <FiMic className="text-green-500 text-3xl" />,
    title: "Real-Time Feedback",
    description: "Get instant pronunciation evaluation as you speak, powered by AI.",
  },
  {
    icon: <FiBarChart2 className="text-blue-500 text-3xl" />,
    title: "Smart Study Plans",
    description: "Tailored exercises based on your strengths and learning goals.",
  },
  {
    icon: <FiActivity className="text-purple-500 text-3xl" />,
    title: "AI-Based Scoring",
    description: "Receive detailed scores modeled after real exams.",
  },
  {
    icon: <FiCheckCircle className="text-yellow-500 text-3xl" />,
    title: "Progress Tracking",
    description: "Track your journey with intuitive charts and performance summaries.",
  },
];

const Features = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Why Choose <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">SpeakSmart</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-[1.03] transition-transform"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">{feature.title}</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
