export default function Content() {
  const events = ["Event 1", "Event 2", "Event 3", "Event 4", "Event 5"];

  return (
    <div className="flex-1 bg-zinc-100 px-6 py-12 font-sans antialiased dark:bg-black">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Verfügbare Events
          </h2>
          <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
            Wähle ein Event aus, um mehr Details zu sehen.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {events.map((event) => (
            <button
              key={event}
              className="group flex aspect-[3/4] flex-col rounded-3xl bg-white p-6 text-left shadow-md transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/40 dark:bg-zinc-900"
            >
              <span className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                {event}
              </span>

              <div className="mt-3 flex-1 text-sm text-zinc-500 dark:text-zinc-400">
                Beschreibung, Datum, Zahlen …
              </div>

              <span className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-500">
                Details
                <span className="transition-transform duration-300 group-hover:translate-x-1">›</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}