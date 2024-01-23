import 'dotenv/config'
import { migrate } from 'drizzle-orm/pg-proxy/migrator'
import db from './index.js'
// This will run migrations on the database, skipping the ones already applied

// TODO: fix. Not working (Bad documentation on this, maybe the callback needs to be something unspecified?)

console.log('*** Migrating')
try {
    await migrate(db, v => v, { migrationsFolder: './drizzle' })
} catch (error) {
    console.log(error)
}
console.log('*** Migrated')
