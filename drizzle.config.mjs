import { defineConfig } from "drizzle-kit";
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  schema: "./shared/schema.ts",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Ksjj#@!4",
    database: "echocare"
  }
});