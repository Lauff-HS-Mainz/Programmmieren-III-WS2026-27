"use client";

import { useState } from "react";
import { addAnmeldung } from "./repairwerk-data";

export default function AnmeldeFormular() {
  const [gesendet, setGesendet] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [kategorie, setKategorie] = useState("");
  const [beschreibung, setBeschreibung] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !kategorie) return;
    addAnmeldung({ name, email, kategorie, beschreibung });
    setGesendet(true);
  };

  if (gesendet) {
    return (
      <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="text-5xl">🎉</div>
        <h3 className="mt-4 text-xl font-bold">Danke, {name}!</h3>
        <p className="mt-2 text-[#4a5c50]">
          Deine Anmeldung ist eingegangen. Unser Team hat sie gesehen und wird sich
          darum kümmern – du bekommst eine Bestätigung per E-Mail.
        </p>
        <button
          onClick={() => {
            setGesendet(false);
            setName("");
            setEmail("");
            setKategorie("");
            setBeschreibung("");
          }}
          className="mt-6 rounded-full border border-emerald-900/15 px-6 py-2.5 font-bold text-[#24352b] transition-colors hover:bg-white"
        >
          Weitere Anmeldung
        </button>
      </div>
    );
  }

  return (
    <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-xl border border-emerald-900/15 bg-[#f7f4ed] px-4 py-3 outline-none transition-colors focus:border-[#c35d37]"
      />
      <input
        type="email"
        placeholder="E-Mail"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-xl border border-emerald-900/15 bg-[#f7f4ed] px-4 py-3 outline-none transition-colors focus:border-[#c35d37]"
      />
      <select
        required
        value={kategorie}
        onChange={(e) => setKategorie(e.target.value)}
        className="rounded-xl border border-emerald-900/15 bg-[#f7f4ed] px-4 py-3 outline-none transition-colors focus:border-[#c35d37] sm:col-span-2"
      >
        <option value="" disabled>
          Was möchtest du reparieren?
        </option>
        <option>Elektronik</option>
        <option>Fahrrad</option>
        <option>Textil</option>
        <option>Möbel / Holz</option>
        <option>Haushaltsgerät</option>
        <option>Sonstiges</option>
      </select>
      <textarea
        placeholder="Kurze Beschreibung deines Anliegens (optional)"
        rows={3}
        value={beschreibung}
        onChange={(e) => setBeschreibung(e.target.value)}
        className="resize-none rounded-xl border border-emerald-900/15 bg-[#f7f4ed] px-4 py-3 outline-none transition-colors focus:border-[#c35d37] sm:col-span-2"
      />
      <button
        type="submit"
        className="rounded-full bg-[#c35d37] px-7 py-3.5 font-bold text-white shadow-lg shadow-[#c35d37]/30 transition-transform hover:scale-[1.02] sm:col-span-2"
      >
        Unverbindlich anmelden
      </button>
    </form>
  );
}
