'use client';
import AuthForm from '@/auth/AuthForm';
import Link from 'next/link';

export default function signup({ mode }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-zinc-900 to-indigo-900 px-4 text-white">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-md space-y-6">
        <AuthForm mode={mode} />
        <p className="text-center text-sm text-zinc-300">
          {mode === 'login'
            ? <>Don’t have an account? <Link href="/signup" className="text-indigo-400 font-semibold hover:underline">Sign Up</Link></>
            : <>Already have an account? <Link href="/login" className="text-indigo-400 font-semibold hover:underline">Log In</Link></>}
        </p>
      </div>
    </main>
  );
}
