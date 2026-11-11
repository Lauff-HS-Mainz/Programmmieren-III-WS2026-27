export default function Content() {
  return (
    <div className="flex min-h-screen flex-col gap-5 bg-slate-50 p-6 text-slate-800 dark:bg-neutral-950 dark:text-slate-100">
      <h2 className="text-lg font-semibold tracking-tight text-emerald-800 dark:text-emerald-300">
        Aktuelle Termine:
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
          <thead>
            <tr className="bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
              <th className="border-b border-slate-200 px-4 py-3 font-semibold dark:border-neutral-700">Datum</th>
              <th className="border-b border-slate-200 px-4 py-3 font-semibold dark:border-neutral-700">Startzeit</th>
              <th className="border-b border-slate-200 px-4 py-3 font-semibold dark:border-neutral-700">Endzeit</th>
              <th className="border-b border-slate-200 px-4 py-3 font-semibold dark:border-neutral-700">Thema</th>
              <th className="border-b border-slate-200 px-4 py-3 font-semibold dark:border-neutral-700">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-slate-100 px-4 py-3 dark:border-neutral-800">01.01.2023</td>
              <td className="border-b border-slate-100 px-4 py-3 dark:border-neutral-800">10:00</td>
              <td className="border-b border-slate-100 px-4 py-3 dark:border-neutral-800">12:00</td>
              <td className="border-b border-slate-100 px-4 py-3 dark:border-neutral-800">Computer</td>
              <td className="border-b border-slate-100 px-4 py-3 dark:border-neutral-800">Bildschirm tauschen</td>
            </tr>
            <tr>
              <td className="border-b border-slate-100 px-4 py-3 dark:border-neutral-800">15.01.2023</td>
              <td className="border-b border-slate-100 px-4 py-3 dark:border-neutral-800">14:00</td>
              <td className="border-b border-slate-100 px-4 py-3 dark:border-neutral-800">16:00</td>
              <td className="border-b border-slate-100 px-4 py-3 dark:border-neutral-800">Fahrrad</td>
              <td className="border-b border-slate-100 px-4 py-3 dark:border-neutral-800">Reifen flicken</td>
            </tr>
            <tr>
              <td className="px-4 py-3">28.01.2023</td>
              <td className="px-4 py-3">09:00</td>
              <td className="px-4 py-3">11:00</td>
              <td className="px-4 py-3">Kleidung</td>
              <td className="px-4 py-3">Reißverschluss reparieren</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}