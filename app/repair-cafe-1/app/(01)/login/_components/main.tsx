// app/(01)/login/_components/main.tsx
import Kogi from "./login";
import Confirm from "./confirm";
import Answer from "./answer";

export default function Main() {
  return (
    <main className="w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
      <Kogi />
      <Confirm />
      <Answer />
      
      <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        Noch kein Konto?{" "}
       <a href="/register" className="text-blue-600 font-medium hover:underline dark:text-blue-400">
         Jetzt registrieren
        </a>
      </p>
    </main>
  );
}