"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
export default function AuthForm({ mode = "login" }) {
  const [isOtpMode, setIsOtpMode] = useState(false);

  return (
    <form className="space-y-4 max-w-md mx-auto bg-white dark:bg-neutral-900 flex flex-col mt-20  p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-center text-zinc-800 dark:text-white">
        {mode === "login" ? "Welcome Back 👋" : "Create Account 🚀"}
      </h2>

      <button
        type="button"
        onClick={() => signIn?.("google")}
        className="auth-button bg-white text-zinc-900 hover:bg-zinc-100"
      >
        Continue with Google
      </button>

      <div className="text-center text-sm text-zinc-500 dark:text-zinc-400">
        or
      </div>

      {isOtpMode ? (
        <>
          <input
            type="tel"
            placeholder="Mobile number"
            className="auth-input"
          />
          <button type="button" className="auth-button">
            Send OTP
          </button>
          <input type="text" placeholder="Enter OTP" className="auth-input" />
        </>
      ) : (
        <>
          <input
            type="email"
            placeholder="Email address"
            className="auth-input"
          />
          {mode === "signup" && (
            <input type="text" placeholder="Your Name" className="auth-input" />
          )}
          <input
            type="password"
            placeholder="Password"
            className="auth-input"
          />
        </>
      )}

      <button type="submit" className="auth-button">
        {mode === "login" ? "Log In" : "Sign Up"}
      </button>

      <div className="flex justify-center text-sm text-zinc-400 pt-2">
        <button
          type="button"
          onClick={() => setIsOtpMode((prev) => !prev)}
          className="hover:underline"
        >
          {isOtpMode ? "Use email instead" : "Use mobile OTP"}
        </button>
      </div>
      {mode === "login" && (
        <div className="flex justify-center text-sm text-zinc-400 pt-2">
          <a href="/forgot-password" className="hover:underline">
            Forgot Password?
          </a>
        </div>
      )}
    </form>
  );
}
