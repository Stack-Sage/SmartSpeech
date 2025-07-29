import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/test", label: "Test" },
  { href: "/study-plan", label: "Study Plan" },
  { href: "/dashboard", label: "Dashboard" },
];

const AnimatedLink = ({ href, children, className = "" }) => (
  <motion.div
    whileHover={{ scale: 1.08 }}
    className="inline-block group"
  >
    <Link
      href={href}
      className={`relative font-medium text-blue-100 hover:text-teal-300 transition focus:outline-none ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded opacity-0 group-hover:opacity-100"
        layoutId="nav-underline"
        initial={{ opacity: 0, scaleX: 0 }}
        whileHover={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.25 }}
      />
    </Link>
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full backdrop-blur-xl bg-gradient-to-br from-[#181C24]/95 via-[#23283a]/90 to-[#10131a]/95 shadow-2xl px-4 md:px-8 py-4 md:py-5 flex justify-between items-center z-50 rounded-b-2xl border-b border-[#23283a]/70 ring-1 ring-[#23283a]/40 transition-colors duration-300"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg hover:opacity-90 transition duration-200 tracking-wide"
      >
        SpeakSmart
      </Link>

      {/* Desktop Menu Links */}
      <div className="hidden md:flex space-x-7 lg:space-x-10">
        {navLinks.map(link => (
          <AnimatedLink key={link.href} href={link.href}>{link.label}</AnimatedLink>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-3 lg:space-x-4 items-center">
        <Link href="/login" className="btn-secondary font-semibold px-4 md:px-5 py-2 rounded-lg shadow bg-[#23283a]/80 text-blue-100 hover:bg-[#23283a]/95 border border-[#23283a]/60 transition">Login</Link>
        <Link href="/signup" className="btn-primary font-semibold px-4 md:px-5 py-2 rounded-lg shadow bg-gradient-to-r from-blue-500 to-teal-400 text-white hover:from-blue-600 hover:to-teal-500 transition">Sign Up</Link>
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden text-3xl p-2 rounded-full bg-gradient-to-tr from-[#23283a] to-[#10131a] shadow-md border border-[#23283a] hover:scale-110 transition-transform duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-20 left-2 right-2 mx-auto w-[95vw] max-w-md bg-gradient-to-br from-[#181C24]/95 via-[#23283a]/90 to-[#10131a]/95 shadow-2xl rounded-2xl flex flex-col items-center py-7 space-y-6 md:hidden border border-[#23283a]/70 ring-1 ring-[#23283a]/40 transition-colors duration-300 backdrop-blur-xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            {navLinks.map(link => (
              <AnimatedLink key={link.href} href={link.href} className="text-lg">{link.label}</AnimatedLink>
            ))}
            <Link href="/login" className="btn-secondary w-3/4 text-center font-semibold px-5 py-2 rounded-lg shadow bg-[#23283a]/80 text-blue-100 hover:bg-[#23283a]/95 border border-[#23283a]/60 transition">Login</Link>
            <Link href="/signup" className="btn-primary w-3/4 text-center font-semibold px-5 py-2 rounded-lg shadow bg-gradient-to-r from-blue-500 to-teal-400 text-white hover:from-blue-600 hover:to-teal-500 transition">Sign Up</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
