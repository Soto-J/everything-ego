// import "dotenv/config";
import env from "./env";

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./db/schemas",
  dialect: "sqlite",
  dbCredentials: { url: env.DB_FILE_NAME },
});
