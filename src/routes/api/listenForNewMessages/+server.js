import { event } from 'sveltekit-sse'
import lorem from 'loerem'
import { types } from '$lib/globals'

let delay = 30000
export function GET() {
	return event(async emit => {
		while (true) {
			await new Promise(r => setTimeout(r, Math.random() * delay))
			emit(JSON.stringify(newMessage()))
			delay = delay === 30000 ? 300000 : 'whatever'
		}
	}).toResponse()
}

const newMessage = () => ({
	id: Math.random(),
	dateSent: Date.now(),
	header: lorem({
		isHeadline: true,
		numberOfParagraphs: 1,
		maxSentenceLength: 6,
		sentencesPerParagraph: 1,
	}),
	content: lorem(),
	type: types.signDocument,
	isImportant: true,
	isRead: false,
	tags: ['dodo'],
	attachments: [],
	thumbnailImage: '',
	action: {
		actionResolveBefore: '1683653834315',
		actionText: 'Signera avtalet',
		actionUrl: 'signeraavtal',
	},
})
