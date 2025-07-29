'use client';
import { useState } from 'react';

export default function ForgotPasswordForm() {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Call your API endpoint to send reset email
    // Example: await fetch('/api/auth/forgot-password', { method: 'POST', body: JSON.stringify({ email }) });
    setEmailSent(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto bg-white dark:bg-zinc-900 p-6 rounded-xl shadow"
    >
      <h2 className="text-2xl font-bold text-center text-zinc-800 dark:text-white">
        Reset Your Password 🔒
      </h2>

      {emailSent ? (
        <p className="text-center text-green-600 dark:text-green-400">
          We've sent a reset link to <strong>{email}</strong> ✉️
        </p>
      ) : (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="auth-input"
          />
          <button type="submit" className="auth-button">
            Send Reset Link
          </button>
        </>
      )}
    </form>
  );
}
