// app/(01)/login/_components/kogi.tsx
export default function Kogi() {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          E-Mail-Adresse
        </label>
        <input
          type="email"
          placeholder="name@beispiel.de"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
      </div>
      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Passwort
          </label>
          <a
            href="/01/forgot-password"
            className="text-xs text-blue-600 hover:underline dark:text-blue-400"
          >
            Passwort vergessen?
          </a>
        </div>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
      </div>
    </div>
  );
}