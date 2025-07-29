import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="relative py-10 px-6 bg-gradient-to-r from-blue-95000 to-black text-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready to elevate your English?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Get personalized feedback and improve your spoken fluency—in minutes.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-lg shadow hover:bg-indigo-100 transition">
            Try a Speaking Test
          </button>
          <button className="border border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-indigo-700 transition">
            See How It Works
          </button>
        </div>
      </div>

      {/* Decorative SVG or icon */}
      <div className="absolute bottom-0 right-0 opacity-30 w-40 h-40 pointer-events-none">
        <Image src="/icons/mic.svg" alt="Mic Icon" width={160} height={160} />
      </div>
    </section>
  );
}
