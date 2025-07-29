
import React from "react";
// ...existing code...
import Link from "next/link";
import Image from "next/image";

const Hero = () => {

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-10 pb-10 overflow-hidden">
      <div className="absolute top-20 -left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Text Section */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight 
            bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent 
            drop-shadow-md animate-fade-in">
            Speak Smarter <br />
            With <span className="text-green-500">AI Power</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0 animate-fade-in delay-200">
            Take a test and unlock a beautiful, personalized learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in delay-400">
            <Link href="/test">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md hover:scale-105">
               Take Test
              </button>
            </Link>
            <Link href="/study-plan">
              <button className="px-6 py-3 rounded-xl border border-green-400 text-green-300 font-semibold shadow hover:shadow-lg transition-all duration-300 backdrop-blur-md hover:scale-105">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        {/* Right Image Section */}
        <div className="flex-1 mt-16 md:mt-0 flex justify-center animate-float">
          <Image
            src="/heroImg.png"
            alt="Speaking Test Illustration"
            width={500}
            height={420}
            className="drop-shadow-2xl rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
