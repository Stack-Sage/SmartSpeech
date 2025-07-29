
import AuthForm from "@/auth/AuthForm";
import { motion } from '@/components/motion';

export default function Login() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
      <motion.div
        className="w-full max-w-md backdrop-blur-lg bg-white/70 dark:bg-zinc-900/80 rounded-2xl shadow-xl p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <AuthForm mode="login" />
      </motion.div>
    </div>
  );
}
