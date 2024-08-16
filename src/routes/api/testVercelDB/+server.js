import { testTable } from '$lib/db/schema'
import '$lib/db/migrate'
import db from '$lib/db'

export const GET = async () => {
	let r
	try {
		r = await db.select().from(testTable)
	} catch (error) {
		r = { error: "Could'nt connect. Sorry." }
	}
	return new Response(JSON.stringify(r, null, 2))
}
