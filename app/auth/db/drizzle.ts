import { Tables } from "./schema";
import { drizzle } from 'drizzle-orm/node-postgres';
import "dotenv/config";
const DATABASE_URL: string = process.env.DATABASE_URL || "postgres://postgres:password@localhost:5432/findScore"

const db = drizzle(DATABASE_URL, { schema: Tables });

export { db };