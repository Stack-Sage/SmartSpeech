import Image from "next/image";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "IELTS Aspirant",
    quote: "SpeakSmart transformed my fluency within weeks. The AI feedback felt just like a real evaluator.",
    image: "/icons/ananya.jpg",
  },
  {
    name: "Ravi Patel",
    role: "Corporate Trainer",
    quote: "The personalized plan helped me speak confidently for interviews and presentations.",
    image: "/icons/ravi.jpg",
  },
  {
    name: "Sara Lee",
    role: "TOEFL Student",
    quote: "I love how intuitive the dashboard is. Watching my scores grow gave me real motivation.",
    image: "/icons/sara.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-950">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Trusted by Learners Worldwide
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((person, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center mb-4">
              {/* <Image
                src={person.image}
                alt={person.name}
                width={50}
                height={50}
                className="rounded-full"
              /> */}
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {person.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{person.role}</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              “{person.quote}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
