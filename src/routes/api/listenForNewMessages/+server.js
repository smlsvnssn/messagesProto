import { event } from 'sveltekit-sse'
import lorem from 'loerem'
import { types } from '$lib/globals'

let delay = 30000
export function GET() {
	return event(async emit => {
		while (true) {
			await new Promise(r => setTimeout(r, Math.random() * delay))
			emit(JSON.stringify(newMessage()))
			if (delay === 30000) delay = 300000
		}
	}).toResponse()
}

const newMessage = () => ({
	id: Math.random(),
	dateSent: Date.now(),
	header: lorem({
		useLörem: false,
		isHeadline: true,
		numberOfParagraphs: 1,
		maxSentenceLength: 6,
		sentencesPerParagraph: 1,
	}),
	content: lorem({ useLörem: false }),
	type: types.signDocument,
	isImportant: true,
	isRead: false,
	action: {
		actionResolveBefore: '1683653834315',
		actionText: 'Signera avtalet',
		actionUrl: 'signeraavtal',
	},
})
