import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

import * as dotenv from "dotenv";
dotenv.config({ path: ['../.env', 'env.local'] });

console.log(process.env.DATABASE_URL)
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });
