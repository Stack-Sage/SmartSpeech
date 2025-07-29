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
    <section className="py-20 px-6 md:px-24 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-900 dark:text-white drop-shadow-lg">
        Trusted by Learners Worldwide
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        {testimonials.map((person, index) => (
          <div
            key={index}
            className="bg-white/90 dark:bg-gray-800/90 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
          >
            <div className="flex items-center mb-6">
              {/* <Image
                src={person.image}
                alt={person.name}
                width={50}
                height={50}
                className="rounded-full"
              /> */}
              <div className="ml-4">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                  {person.name}
                </h4>
                <p className="text-base text-gray-500 dark:text-gray-300">{person.role}</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-200 italic text-lg">
              “{person.quote}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
