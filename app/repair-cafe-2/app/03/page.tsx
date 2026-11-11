import Header from "./_components/header";
import AnmeldeFormular from "./_components/anmelde-formular";

const ANGEBOTE = [
  {
    icon: "💻",
    titel: "Elektronik",
    text: "Laptops, Smartphones, Kopfhörer, Staubsauger – alles mit Strom bekommt eine zweite Chance.",
    farbe: "bg-emerald-50 border-emerald-200",
  },
  {
    icon: "🚲",
    titel: "Fahrräder",
    text: "Bremsen, Schaltung, Reifen: Wir bringen dein Rad wieder auf die Straße.",
    farbe: "bg-sky-50 border-sky-200",
  },
  {
    icon: "👕",
    titel: "Textilien",
    text: "Reißverschluss, Loch im Lieblingspulli oder Naht gerissen? Nähworkshop inklusive.",
    farbe: "bg-rose-50 border-rose-200",
  },
  {
    icon: "🪑",
    titel: "Möbel & Holz",
    text: "Wackelige Stühle, abgebrochene Schubladen und mehr – Handwerk trifft Geduld.",
    farbe: "bg-amber-50 border-amber-200",
  },
  {
    icon: "🔌",
    titel: "Haushaltsgeräte",
    text: "Wasserkocher, Mixer, Bügeleisen: Kleine Defekte, große Wirkung für die Umwelt.",
    farbe: "bg-indigo-50 border-indigo-200",
  },
  {
    icon: "🛠️",
    titel: "Alles Weitere",
    text: "Spielzeug, Schmuck, Rucksäcke – wenn du es reparieren willst, sind wir dabei.",
    farbe: "bg-teal-50 border-teal-200",
  },
];

const SCHRITTE = [
  {
    nummer: "01",
    titel: "Vorbeikommen",
    text: "Kein Termin nötig. Komm einfach während der Öffnungszeiten ins Foyer des Hauptgebäudes.",
  },
  {
    nummer: "02",
    titel: "Anmeldung am Tresen",
    text: "Wir notieren dein Anliegen und hängen ein Ticket an dein Gerät – ganz ohne Papierkram.",
  },
  {
    nummer: "03",
    titel: "Gemeinsam reparieren",
    text: "Du reparierst mit Unterstützung unserer geschulten Helfer:innen selbst – Lernen inklusive.",
  },
  {
    nummer: "04",
    titel: "Wissen mitnehmen",
    text: "Am Ende weißt du, wie's geht. Und falls ein Teil fehlt, sagen wir dir, wo du es findest.",
  },
];

const TERMINE = [
  {
    datum: "14. März",
    zeit: "10:00 – 14:00 Uhr",
    ort: "Foyer Hauptgebäude",
    hinweis: "Nächster Termin",
    aktiv: true,
  },
  {
    datum: "11. April",
    zeit: "10:00 – 14:00 Uhr",
    ort: "Bibliothek, EG",
    hinweis: "Anmeldung erwünscht",
    aktiv: false,
  },
  {
    datum: "16. Mai",
    zeit: "12:00 – 16:00 Uhr",
    ort: "Campus Nord, Werkstatt",
    hinweis: "Mit Vortrag: Elektronik-Löten",
    aktiv: false,
  },
];

const TEAM = [
  {
    name: "Lena Berger",
    rolle: "Elektronik & Koordination",
    initialen: "LB",
    farbe: "bg-emerald-600",
  },
  {
    name: "Jonas Weber",
    rolle: "Fahrrad & Mechanik",
    initialen: "JW",
    farbe: "bg-sky-600",
  },
  {
    name: "Mia Hoffmann",
    rolle: "Textil & Nähen",
    initialen: "MH",
    farbe: "bg-rose-600",
  },
  {
    name: "Tobias Krüger",
    rolle: "Holz & Möbel",
    initialen: "TK",
    farbe: "bg-amber-600",
  },
];

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-[#f7f4ed] text-[#24352b] font-sans">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#f2bd74]/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#c35d37] shadow-sm">
              Repair Café · Gemeinsam nachhaltig
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Kaputt ist nicht <span className="text-[#c35d37]">gleich vorbei.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4a5c50]">
              Im Repair Café deiner Hochschule reparieren wir gemeinsam Alltagsgegenstände,
              teilen Wissen und geben Dingen eine zweite Chance – kostenlos, nachhaltig
              und für alle Studierenden & Beschäftigten.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#anmelden"
                className="rounded-full bg-[#c35d37] px-7 py-3.5 font-bold text-white shadow-lg shadow-[#c35d37]/30 transition-transform hover:scale-105"
              >
                Nächsten Termin ansehen
              </a>
              <a
                href="#ablauf"
                className="rounded-full border border-emerald-900/15 bg-white px-7 py-3.5 font-bold text-[#24352b] transition-colors hover:bg-emerald-50"
              >
                So funktioniert&apos;s
              </a>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-emerald-900/10 pt-6">
              <div>
                <dt className="text-3xl font-extrabold text-[#c35d37]">1.200+</dt>
                <dd className="text-sm text-[#4a5c50]">Reparaturen</dd>
              </div>
              <div>
                <dt className="text-3xl font-extrabold text-[#c35d37]">60%</dt>
                <dd className="text-sm text-[#4a5c50]">gerettet</dd>
              </div>
              <div>
                <dt className="text-3xl font-extrabold text-[#c35d37]">8</dt>
                <dd className="text-sm text-[#4a5c50]">Tons CO₂ gespart</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-[#d8e4d4] p-10 shadow-2xl shadow-emerald-900/10">
              <div className="text-7xl text-center">🔧</div>
              <h2 className="mt-6 text-center text-2xl font-bold">
                Was können wir reparieren?
              </h2>
              <p className="mt-3 text-center leading-relaxed text-[#3a4c42]">
                Elektronik · Fahrräder · Kleidung · Möbel · Haushaltsgeräte
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-2xl">
                <span className="rounded-xl bg-white/70 p-3">💡</span>
                <span className="rounded-xl bg-white/70 p-3">🚲</span>
                <span className="rounded-xl bg-white/70 p-3">🧵</span>
                <span className="rounded-xl bg-white/70 p-3">🪑</span>
                <span className="rounded-xl bg-white/70 p-3">🔌</span>
                <span className="rounded-xl bg-white/70 p-3">🛠️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Angebote */}
      <section id="angebote" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c35d37]">
              Unsere Angebote
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Was bringen wir wieder zum Laufen?
            </h2>
            <p className="mt-4 text-[#4a5c50]">
              Sechs Werkbänke, jede Menge Werkzeug und eine fröhliche Community – finde
              heraus, was dein Projekt ist.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ANGEBOTE.map((item) => (
              <article
                key={item.titel}
                className={`group rounded-2xl border p-6 transition-transform hover:-translate-y-1 ${item.farbe}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold">{item.titel}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4a5c50]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="bg-[#f7f4ed] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c35d37]">
              So funktioniert&apos;s
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              In vier Schritten repariert
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {SCHRITTE.map((schritt, i) => (
              <div key={schritt.nummer} className="relative">
                {i < SCHRITTE.length - 1 && (
                  <div className="absolute left-full top-8 hidden h-px w-8 bg-[#c35d37]/30 md:block" />
                )}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c35d37] text-xl font-extrabold text-white shadow-lg shadow-[#c35d37]/25">
                  {schritt.nummer}
                </div>
                <h3 className="mt-5 text-lg font-bold">{schritt.titel}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4a5c50]">
                  {schritt.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Termine */}
      <section id="termin" className="bg-[#0d2b21] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f2bd74]">
              Termine
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Komm zum nächsten Repair Café
            </h2>
            <p className="mt-4 text-white/70">
              Jeden zweiten Samstag im Monat. Eintritt frei, keine Vorkenntnisse nötig.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TERMINE.map((termin) => (
              <article
                key={termin.datum}
                className={`rounded-2xl border p-6 ${
                  termin.aktiv
                    ? "border-[#f2bd74]/60 bg-[#f2bd74]/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {termin.aktiv && (
                  <span className="inline-block rounded-full bg-[#f2bd74] px-3 py-1 text-xs font-bold text-[#0d2b21]">
                    {termin.hinweis}
                  </span>
                )}
                {!termin.aktiv && (
                  <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/60">
                    {termin.hinweis}
                  </span>
                )}
                <p className="mt-4 text-3xl font-extrabold text-[#f2bd74]">
                  {termin.datum}
                </p>
                <p className="mt-1 font-medium">{termin.zeit}</p>
                <p className="mt-1 text-white/70">{termin.ort}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c35d37]">
              Das Team
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Studierende, die reparieren
            </h2>
            <p className="mt-4 text-[#4a5c50]">
              Unser ehrenamtliches Team besteht aus Studierenden aller Fachbereiche –
              vom Maschinenbau bis zum Modedesign.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((mitglied) => (
              <div
                key={mitglied.name}
                className="rounded-2xl border border-emerald-900/10 p-6 text-center transition-transform hover:-translate-y-1"
              >
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-2xl font-extrabold text-white shadow-lg ${mitglied.farbe}`}
                >
                  {mitglied.initialen}
                </div>
                <h3 className="mt-4 font-bold">{mitglied.name}</h3>
                <p className="mt-1 text-sm text-[#4a5c50]">{mitglied.rolle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anmelden */}
      <section id="anmelden" className="bg-[#f7f4ed] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-emerald-900/10 sm:p-12">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-[#c35d37]">
                Anmeldung
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                Sicher dir deinen Platz
              </h2>
              <p className="mt-3 text-[#4a5c50]">
                Melde dein Gerät unverbindlich an – so können wir passendes Werkzeug
                vorbereiten. Vorbeikommen geht aber auch ohne Anmeldung.
              </p>
            </div>

            <AnmeldeFormular />
          </div>
        </div>
      </section>

      {/* Footer / Kontakt */}
      <footer
        id="kontakt"
        className="border-t border-white/10 bg-[#0d2b21] py-12 text-white"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f2bd74] text-lg">
                🔧
              </span>
              <span className="font-bold">
                Reparatur<span className="text-[#f2bd74]">Werk</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-white/60">
              Das Repair Café deiner Hochschule – Gemeinschaftsprojekt des
              Green-Campus-Initiativkreises.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#f2bd74]">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:hallo@reparaturwerk.de" className="hover:text-[#f2bd74]">
                  hallo@reparaturwerk.de
                </a>
              </li>
              <li>Hauptgebäude, Raum A.1.12</li>
              <li>Campus-Servicebüro für Studierende</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#f2bd74]">
              Öffnungszeiten
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Sa 10:00 – 14:00 (1× im Monat)</li>
              <li>Mi 15:00 – 18:00 (Sprechstunde)</li>
              <li>Feiertage geschlossen</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-6 pt-6 text-center text-xs text-white/40">
          © 2026 ReparaturWerk · Repair Café der Hochschule ·
          Zusammen für weniger Elektroschrott 🌱 ·{" "}
          <a href="/03/admin" className="underline hover:text-[#f2bd74]">
            Admin-Bereich
          </a>
        </div>
      </footer>
    </main>
  );
}
