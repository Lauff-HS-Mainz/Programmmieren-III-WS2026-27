export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 p-4">
      {/* Header */}
      <header className="w-full py-6 text-center border-b border-gray-200 dark:border-gray-800 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Konto erstellen
        </h1>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6">
          Erstelle ein neues Konto, um das Repair Café zu nutzen.
        </p>

        {/* Input Felder */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Vollständiger Name
            </label>
            <input
              type="text"
              placeholder="Max Mustermann"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

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
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Passwort
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Passwort wiederholen
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            Registrieren
          </button>
        </form>

        {/* Link zurück zum Login */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Bereits ein Konto?{" "}
        <a href="/login" className="text-blue-600 font-medium hover:underline dark:text-blue-400">
        Hier anmelden
        </a>    
        </p>
      </main>
    </div>
  );
}