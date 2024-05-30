import Dotenv from "dotenv"

import { Pool } from "pg"
import { drizzle } from "drizzle-orm/node-postgres"

import { schema } from "../schema"

Dotenv.config()

const DB_URL = process.env.DB_URL
if (!DB_URL) throw new Error("Please set the DB_URL environment variable")

export const pg = new Pool({ connectionString: DB_URL })
export const db = drizzle(pg, { schema })
