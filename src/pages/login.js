import AuthForm from "@/auth/AuthForm";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
      <AuthForm mode="login" />
    </div>
  );
}
