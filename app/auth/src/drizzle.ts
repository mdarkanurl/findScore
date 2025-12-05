import { databaseTable } from "./db/index";
import { drizzle } from 'drizzle-orm/node-postgres';
import "dotenv/config";

const db = drizzle(process.env.DATABASE_URL, { schema: databaseTable });

export { db };