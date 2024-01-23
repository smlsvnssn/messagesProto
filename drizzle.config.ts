import type { Config } from 'drizzle-kit'
import * as dotenv from 'dotenv'
dotenv.config({
    path: '.env.local',
})

export default {
    schema: './src/lib/db/schema.js',
    out: './drizzle',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.POSTGRES_URL,
        host: process.env.POSTGRES_HOST,
        //port: process.env.POSTGRES_URL,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        ssl: true,
    },
} satisfies Config
