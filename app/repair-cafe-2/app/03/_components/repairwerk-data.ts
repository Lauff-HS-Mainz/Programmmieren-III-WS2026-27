// Zentrale Datenhaltung für das Repair-Café-Projekt.
// Anmeldungen und Team-Mitglieder werden im LocalStorage des Browsers gespeichert.

export type Status = "offen" | "zugewiesen" | "in_bearbeitung" | "erledigt";

export const STATUS_LABELS: Record<Status, string> = {
  offen: "Offen",
  zugewiesen: "Zugewiesen",
  in_bearbeitung: "In Bearbeitung",
  erledigt: "Erledigt",
};

export type Anmeldung = {
  id: string;
  name: string;
  email: string;
  kategorie: string;
  beschreibung: string;
  status: Status;
  teamMitglied: string | null;
  erstelltAm: string; // ISO-Datum
};

export type Teammitglied = {
  id: string;
  name: string;
  fachbereich: string;
};

const ANMELDUNGEN_KEY = "repairwerk_anmeldungen";
const TEAM_KEY = "repairwerk_team";

// ---------- generische LocalStorage-Helfer ----------

function readJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function uid(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

// ---------- Anmeldungen ----------

export function getAnmeldungen(): Anmeldung[] {
  return readJSON<Anmeldung[]>(ANMELDUNGEN_KEY, []);
}

export function addAnmeldung(daten: Omit<Anmeldung, "id" | "status" | "teamMitglied" | "erstelltAm">): Anmeldung {
  const anmeldung: Anmeldung = {
    ...daten,
    id: uid(),
    status: "offen",
    teamMitglied: null,
    erstelltAm: new Date().toISOString(),
  };
  writeJSON(ANMELDUNGEN_KEY, [anmeldung, ...getAnmeldungen()]);
  return anmeldung;
}

export function updateAnmeldung(id: string, teil: Partial<Anmeldung>) {
  writeJSON(
    ANMELDUNGEN_KEY,
    getAnmeldungen().map((a) => (a.id === id ? { ...a, ...teil } : a))
  );
}

export function deleteAnmeldung(id: string) {
  writeJSON(
    ANMELDUNGEN_KEY,
    getAnmeldungen().filter((a) => a.id !== id)
  );
}

// ---------- Team ----------

export function getTeam(): Teammitglied[] {
  return readJSON<Teammitglied[]>(TEAM_KEY, [
    { id: "lb", name: "Lena Berger", fachbereich: "Elektronik & Koordination" },
    { id: "jw", name: "Jonas Weber", fachbereich: "Fahrrad & Mechanik" },
    { id: "mh", name: "Mia Hoffmann", fachbereich: "Textil & Nähen" },
    { id: "tk", name: "Tobias Krüger", fachbereich: "Holz & Möbel" },
  ]);
}

export function addTeammitglied(daten: Omit<Teammitglied, "id">): Teammitglied {
  const mitglied: Teammitglied = { ...daten, id: uid() };
  writeJSON(TEAM_KEY, [...getTeam(), mitglied]);
  return mitglied;
}

export function updateTeammitglied(id: string, teil: Partial<Teammitglied>) {
  writeJSON(
    TEAM_KEY,
    getTeam().map((m) => (m.id === id ? { ...m, ...teil } : m))
  );
}

export function deleteTeammitglied(id: string) {
  writeJSON(
    TEAM_KEY,
    getTeam().filter((m) => m.id !== id)
  );
}
