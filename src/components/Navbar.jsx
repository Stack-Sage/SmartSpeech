import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md px-6 py-3 flex justify-between items-center z-50  ">
      
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80"
      >
        SpeakSmart
      </Link>

      {/* Desktop Menu Links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/test" className="nav-link">Test</Link>
        <Link href="/study-plan" className="nav-link">Study Plan</Link>
        <Link href="/dashboard" className="nav-link">Dashboard</Link>
      </div>

      {/* Desktop Buttons + Dark/Light Toggle */}
      <div className="hidden md:flex space-x-4 items-center">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full dark:bg-gray-700 hover:opacity-80 transition bg-neutral-300  "
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
        <Link href="/login" className="btn-secondary">Login</Link>
        <Link href="/signup" className="btn-primary">Sign Up</Link>
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="/test" className="nav-link">Test</Link>
          <Link href="/study-plan" className="nav-link">Study Plan</Link>
          <Link href="/dashboard" className="nav-link">Dashboard</Link>

         
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:opacity-80 transition"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          <Link href="/login" className="btn-secondary w-3/4 text-center">Login</Link>
          <Link href="/signup" className="btn-primary w-3/4 text-center">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
