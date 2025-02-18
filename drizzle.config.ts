import type { Config } from "drizzle-kit";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  schema: "./shared/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    host: "localhost",
    user: "postgres",
    password: "Ksjj#@!4",
    database: "echocare",
    port: 5432
  },
} satisfies Config;