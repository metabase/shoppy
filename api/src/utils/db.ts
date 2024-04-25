import Dotenv from "dotenv"

import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"

import { schema } from "../schema"

Dotenv.config()

const DB_URL = process.env.DB_URL
if (!DB_URL) throw new Error("Please set the DB_URL environment variable")

export const pg = postgres(DB_URL, { max: 1 })
export const db = drizzle(pg, { schema })
