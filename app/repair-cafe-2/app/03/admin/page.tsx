"use client";

import { useState } from "react";
import {
  STATUS_LABELS,
  Status,
  Anmeldung,
  Teammitglied,
  getAnmeldungen,
  updateAnmeldung,
  deleteAnmeldung,
  getTeam,
  addTeammitglied,
  updateTeammitglied,
  deleteTeammitglied,
} from "../_components/repairwerk-data";

const STATUS_FARBEN: Record<Status, string> = {
  offen: "bg-amber-100 text-amber-800 border-amber-300",
  zugewiesen: "bg-sky-100 text-sky-800 border-sky-300",
  in_bearbeitung: "bg-indigo-100 text-indigo-800 border-indigo-300",
  erledigt: "bg-emerald-100 text-emerald-800 border-emerald-300",
};

function formatDatum(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export default function AdminSeite() {
  const [anmeldungen, setAnmeldungen] = useState<Anmeldung[]>(() => getAnmeldungen());
  const [team, setTeam] = useState<Teammitglied[]>(() => getTeam());
  const [filter, setFilter] = useState<Status | "alle">("alle");

  // Team-Pflege
  const [neuName, setNeuName] = useState("");
  const [neuFach, setNeuFach] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editFach, setEditFach] = useState("");

  const zaehler = anmeldungen.reduce<Record<Status, number>>(
    (acc, a) => {
      acc[a.status] += 1;
      return acc;
    },
    { offen: 0, zugewiesen: 0, in_bearbeitung: 0, erledigt: 0 }
  );

  const sichtbare = filter === "alle" ? anmeldungen : anmeldungen.filter((a) => a.status === filter);

  const statusWechseln = (id: string, status: Status) => {
    updateAnmeldung(id, { status });
    setAnmeldungen(getAnmeldungen());
  };

  const zuweisen = (id: string, teamId: string) => {
    const mitglied = team.find((t) => t.id === teamId) ?? null;
    updateAnmeldung(id, { teamMitglied: mitglied ? mitglied.name : null, status: "zugewiesen" });
    setAnmeldungen(getAnmeldungen());
  };

  const loeschen = (id: string) => {
    deleteAnmeldung(id);
    setAnmeldungen(getAnmeldungen());
  };

  const mitgliedHinzufuegen = () => {
    if (!neuName.trim()) return;
    addTeammitglied({ name: neuName.trim(), fachbereich: neuFach.trim() || "Allgemein" });
    setTeam(getTeam());
    setNeuName("");
    setNeuFach("");
  };

  const mitgliedSpeichern = (id: string) => {
    updateTeammitglied(id, { name: editName, fachbereich: editFach });
    setTeam(getTeam());
    setEditId(null);
  };

  const mitgliedLoeschen = (id: string) => {
    // Entferne Zuweisungen dieses Mitglieds
    const name = team.find((t) => t.id === id)?.name;
    deleteTeammitglied(id);
    if (name) {
      getAnmeldungen()
        .filter((a) => a.teamMitglied === name)
        .forEach((a) => updateAnmeldung(a.id, { teamMitglied: null, status: "offen" }));
    }
    setTeam(getTeam());
    setAnmeldungen(getAnmeldungen());
  };

  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#24352b] font-sans">
      {/* Kopfbereich */}
      <div className="border-b border-emerald-900/10 bg-[#0d2b21]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6">
          <div>
            <h1 className="text-2xl font-extrabold text-white">
              Admin <span className="text-[#f2bd74]">· Anmeldungen</span>
            </h1>
            <p className="mt-1 text-sm text-white/60">
              Übersicht der Reparaturanfragen und Team-Zuweisung
            </p>
          </div>
          <a
            href="/03"
            className="rounded-full bg-[#f2bd74] px-5 py-2.5 text-sm font-bold text-[#0d2b21] transition-transform hover:scale-105"
          >
            ← Zurück zur Seite
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Statistik */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(["offen", "zugewiesen", "in_bearbeitung", "erledigt"] as Status[]).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(filter === s ? "alle" : s)}
              className={`rounded-2xl border p-5 text-left transition-colors ${
                filter === s
                  ? "border-[#c35d37] bg-white shadow-lg"
                  : "border-emerald-900/10 bg-white hover:bg-emerald-50"
              }`}
            >
              <p className="text-sm font-semibold text-[#4a5c50]">{STATUS_LABELS[s]}</p>
              <p className="mt-1 text-4xl font-extrabold">{zaehler[s]}</p>
            </button>
          ))}
        </div>

        {/* Liste der Anmeldungen */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">
              Anmeldungen
              {filter !== "alle" && (
                <span className="ml-2 rounded-full bg-[#c35d37] px-3 py-0.5 text-xs font-bold text-white">
                  {STATUS_LABELS[filter]}
                </span>
              )}
            </h2>
            <span className="text-sm text-[#4a5c50]">
              {sichtbare.length} von {anmeldungen.length}
            </span>
          </div>

          {sichtbare.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-emerald-900/20 bg-white p-12 text-center">
              <div className="text-5xl">📭</div>
              <p className="mt-4 font-semibold">Keine Anmeldungen in dieser Ansicht</p>
              <p className="mt-1 text-sm text-[#4a5c50]">
                Sobald jemand über das Formular anmeldet, erscheint das Anliegen hier.
              </p>
            </div>
          ) : (
            <ul className="mt-6 space-y-4">
              {sichtbare.map((a) => (
                <li key={a.id} className="rounded-2xl border border-emerald-900/10 bg-white p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-bold">{a.name}</h3>
                        <span
                          className={`rounded-full border px-3 py-0.5 text-xs font-bold ${STATUS_FARBEN[a.status]}`}
                        >
                          {STATUS_LABELS[a.status]}
                        </span>
                        <span className="text-xs text-[#4a5c50]">📅 {formatDatum(a.erstelltAm)}</span>
                      </div>
                      <p className="mt-1 text-sm text-[#4a5c50]">{a.email}</p>
                      <p className="mt-3">
                        <span className="font-semibold">Anforderung:</span>{" "}
                        <span className="rounded-lg bg-[#f7f4ed] px-2 py-0.5 text-sm">{a.kategorie}</span>
                      </p>
                      {a.beschreibung && (
                        <p className="mt-2 text-sm italic text-[#4a5c50]">„{a.beschreibung}“</p>
                      )}
                      <p className="mt-3 text-sm">
                        <span className="font-semibold">Zugewiesen an:</span>{" "}
                        {a.teamMitglied ? (
                          <span className="font-medium text-[#c35d37]">{a.teamMitglied}</span>
                        ) : (
                          <span className="text-[#4a5c50]">– noch niemandem</span>
                        )}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 sm:items-end">
                      <select
                        value={a.teamMitglied ?? ""}
                        onChange={(e) => zuweisen(a.id, e.target.value)}
                        className="rounded-lg border border-emerald-900/15 bg-[#f7f4ed] px-3 py-2 text-sm outline-none focus:border-[#c35d37]"
                      >
                        <option value="" disabled>
                          Zuweisen…
                        </option>
                        {team.map((m) => (
                          <option key={m.id} value={m.id}>
                            {m.name}
                          </option>
                        ))}
                      </select>

                      <select
                        value={a.status}
                        onChange={(e) => statusWechseln(a.id, e.target.value as Status)}
                        className="rounded-lg border border-emerald-900/15 bg-[#f7f4ed] px-3 py-2 text-sm outline-none focus:border-[#c35d37]"
                      >
                        {(Object.keys(STATUS_LABELS) as Status[]).map((s) => (
                          <option key={s} value={s}>
                            {STATUS_LABELS[s]}
                          </option>
                        ))}
                      </select>

                      <button
                        onClick={() => loeschen(a.id)}
                        className="rounded-lg px-3 py-1.5 text-xs font-semibold text-red-500 transition-colors hover:bg-red-50"
                      >
                        Löschen
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Team-Verwaltung */}
        <div className="mt-14 rounded-2xl border border-emerald-900/10 bg-white p-6">
          <h2 className="text-xl font-bold">Team-Verwaltung</h2>
          <p className="mt-1 text-sm text-[#4a5c50]">
            Pflege die Liste der Teammitglieder, denen Anliegen zugewiesen werden können.
          </p>

          {/* Hinzufügen */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Name"
              value={neuName}
              onChange={(e) => setNeuName(e.target.value)}
              className="flex-1 rounded-xl border border-emerald-900/15 bg-[#f7f4ed] px-4 py-2.5 outline-none focus:border-[#c35d37]"
            />
            <input
              type="text"
              placeholder="Fachbereich (optional)"
              value={neuFach}
              onChange={(e) => setNeuFach(e.target.value)}
              className="flex-1 rounded-xl border border-emerald-900/15 bg-[#f7f4ed] px-4 py-2.5 outline-none focus:border-[#c35d37]"
            />
            <button
              onClick={mitgliedHinzufuegen}
              className="rounded-xl bg-[#0d2b21] px-5 py-2.5 font-bold text-white transition-colors hover:bg-[#173d2f]"
            >
              + Hinzufügen
            </button>
          </div>

          {/* Liste */}
          <ul className="mt-6 divide-y divide-emerald-900/10">
            {team.map((m) => (
              <li key={m.id} className="py-4">
                {editId === m.id ? (
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="flex-1 rounded-xl border border-emerald-900/15 bg-[#f7f4ed] px-4 py-2 outline-none focus:border-[#c35d37]"
                    />
                    <input
                      type="text"
                      value={editFach}
                      onChange={(e) => setEditFach(e.target.value)}
                      className="flex-1 rounded-xl border border-emerald-900/15 bg-[#f7f4ed] px-4 py-2 outline-none focus:border-[#c35d37]"
                    />
                    <button
                      onClick={() => mitgliedSpeichern(m.id)}
                      className="rounded-xl bg-[#c35d37] px-4 py-2 font-bold text-white"
                    >
                      Speichern
                    </button>
                    <button
                      onClick={() => setEditId(null)}
                      className="rounded-xl border border-emerald-900/15 px-4 py-2 font-semibold text-[#4a5c50]"
                    >
                      Abbrechen
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold">{m.name}</p>
                      <p className="text-sm text-[#4a5c50]">{m.fachbereich}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditId(m.id);
                          setEditName(m.name);
                          setEditFach(m.fachbereich);
                        }}
                        className="rounded-lg px-3 py-1.5 text-sm font-semibold text-[#24352b] transition-colors hover:bg-emerald-50"
                      >
                        Bearbeiten
                      </button>
                      <button
                        onClick={() => mitgliedLoeschen(m.id)}
                        className="rounded-lg px-3 py-1.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
                      >
                        Entfernen
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
