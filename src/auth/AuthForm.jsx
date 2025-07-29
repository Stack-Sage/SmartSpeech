import { useState } from 'react';



export default function AuthForm({ mode = 'login' }) {
  const [isOtpMode, setIsOtpMode] = useState(false);

  return (
    <form className="space-y-4 w-full">
      <h2 className="text-2xl font-bold text-center">
        {mode === 'login' ? 'Welcome Back 👋' : 'Create Account 🚀'}
      </h2>


      <div className="text-center text-zinc-400 text-sm">or</div>

      {isOtpMode ? (
        <>
          <input type="tel" placeholder="Mobile number" className="auth-input" />
          <button type="button" className="auth-button">Send OTP</button>
          <input type="text" placeholder="Enter OTP" className="auth-input" />
        </>
      ) : (
        <>
          <input type="email" placeholder="Email address" className="auth-input" />
          {mode === 'signup' && <input type="text" placeholder="Your Name" className="auth-input" />}
          <input type="password" placeholder="Password" className="auth-input" />
        </>
      )}

      <button type="submit" className="auth-button">
        {mode === 'login' ? 'Log In' : 'Sign Up'}
      </button>

      <div className="flex justify-center text-sm text-zinc-400">
        <button type="button" onClick={() => setIsOtpMode(prev => !prev)} className="hover:underline">
          {isOtpMode ? 'Use email instead' : 'Use mobile OTP'}
        </button>
      </div>
    </form>
  );
}
