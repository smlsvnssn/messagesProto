import { sample } from 'ouml'
const jokes = [
	'Man vill bli älskad, i brist därpå beundrad, i brist därpå få papperspost.',
	'Jag vill ha papper att sätta i mina mappar på min kontor. Min arvetsrum, rättare sagt.',
	'Jag hatar träd! Gör pappersmassa av dem allihop, ett årsbesked i taget.',
]

export async function GET() {
	return new Response(JSON.stringify(sample(jokes), null, 2))
}
