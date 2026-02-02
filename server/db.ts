import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);

if (!hasDatabaseUrl && process.env.NODE_ENV === "production") {
  throw new Error(
    "В production-режиме требуется DATABASE_URL. Проверьте настройку базы данных.",
  );
}

export const pool: pg.Pool | null = hasDatabaseUrl
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : null;

export const db = hasDatabaseUrl ? drizzle(pool, { schema }) : null;
