// Node.js 24 has no global Temporal, which the temporal columns need at query time.
import "temporal-polyfill/full/global";
import postgres from "@prisma/orm-postgres/runtime";
import { contractFromJson } from "@prisma/orm-postgres/static";
import type { Contract } from "./contract.d";
import contractJson from "./contract.json" with { type: "json" };

export const contract = contractFromJson<Contract>(contractJson);

function createDb() {
  return postgres({ contract, url: process.env["DATABASE_URL"]! });
}

// Hot reloads in `next dev` re-run this module; reuse the client so that each
// reload does not open another connection pool.
const globalForDb = globalThis as unknown as {
  db?: ReturnType<typeof createDb>;
};

export const db = globalForDb.db ?? createDb();

if (process.env.NODE_ENV !== "production") {
  globalForDb.db = db;
}
