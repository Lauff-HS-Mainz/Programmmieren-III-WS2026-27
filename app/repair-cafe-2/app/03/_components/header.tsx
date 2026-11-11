const NAV_LINKS = [
  { href: "#angebote", label: "Angebote" },
  { href: "#ablauf", label: "So funktioniert's" },
  { href: "#termin", label: "Termine" },
  { href: "#team", label: "Team" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-900/10 bg-[#0d2b21]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f2bd74] text-xl shadow-md shadow-emerald-900/20">
            🔧
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            Reparatur<span className="text-[#f2bd74]">Werk</span>
            <span className="ml-2 hidden text-xs font-medium text-white/50 sm:inline">
              Hochschule
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 transition-colors hover:text-[#f2bd74]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#anmelden"
            className="rounded-full bg-[#f2bd74] px-5 py-2 text-sm font-bold text-[#0d2b21] shadow-md shadow-emerald-900/20 transition-transform hover:scale-105"
          >
            Anmelden
          </a>
        </nav>

        <a
          href="#anmelden"
          className="rounded-full bg-[#f2bd74] px-4 py-2 text-sm font-bold text-[#0d2b21] md:hidden"
        >
          Anmelden
        </a>
      </div>
    </header>
  );
}
