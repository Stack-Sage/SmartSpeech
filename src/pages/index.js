import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="bg-black dark:bg-gray-900 text-gray-900 dark:text-white">
      <main className="pt-16"> 
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </main>
     
    </div>
  );
}
