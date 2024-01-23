import { testTable } from '$lib/db/schema'
import '$lib/db/migrate'
import db from '$lib/db'

export async function GET() {
    let r
    try {
        r = await db.select().from(testTable)
    } catch (error) {
        r = { error: "Could'nt connect. Sorry." }
    }
    return new Response(JSON.stringify(r, null, 2))
}
