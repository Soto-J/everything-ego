import { drizzle } from "drizzle-orm/libsql";

const DB_FILE_NAME = process.env.DB_FILE_NAME;

if (!DB_FILE_NAME) {
  throw new Error("DB_FILE_NAME name missing");
}

export const db = drizzle(DB_FILE_NAME);
