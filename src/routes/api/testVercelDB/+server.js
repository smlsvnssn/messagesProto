import { POSTGRES_URL } from '$env/static/private'
import { createPool } from '@vercel/postgres'

const pool = createPool({
	connectionString: POSTGRES_URL,
})

export async function GET() {
	const r = await pool.sql`SELECT * FROM test`
	console.log(r.rows)
	return new Response(JSON.stringify(r.rows))
}
