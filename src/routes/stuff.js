import { get, writable } from 'svelte/store'
import * as ö from 'ouml'

export const isRedDotActive = writable(true)
export const isMessagePaneActive = writable(false)
export const isSmallWindow = writable(null)

export const types = ö.createEnum([
	'massMessage',
	'marketingMessage',
	'secureMessage',
	'notification',
	'signDocument',
	'newDocument',
])
export const messages = writable(
	/*
Response: 
Header 
Content
Type 
Categorisation (if we get everything from the service)
Date
Important flag 
Tag(s?)
Unread
-- message specific --
 Cases
Attachments 

-- Root level --
UnreadCount

*/
	[
		/*{
			id: 666,
			dateSent: '1683653834315',
			header: 'This is a test message with all the things.',
			content:
				'This is the message body. It can be either a string, an HTML string, or an array of threaded messages.',
			type: types.massMessage,
			category: 'Erbjudande',
			isImportant: false,
			isRead: false,
			tags: ['dodo'],
			cases: ['answer', 'reply'],
			attachments: ['biff.pdf', 'boff.xls'],
			thumbnailImage: '',
			action: {
				actionResolveBefore: '1683653834315',
				actionText: 'Gör grejen',
				actionUrl: '#',
			},
		},*/
		{
			id: 666,
			dateSent: '1683653834315',
			header: 'Hej igen, logga in och testa. Det borde funka!',
			content:
				'Detta är ett trådat meddelande. Den vyn är inte här ännu.',
			type: types.secureMessage,
			category: '',
			isImportant: false,
			isRead: false,
			tags: ['dodo'],
			cases: [
				'answer',
				'reply',
				'gjgjg',
				'gjgjg',
				'gjgjg',
				'gjgjg',
				'gjgjg',
				'gjgjg',
			],
			attachments: ['biff.pdf', 'boff.xls'],
			thumbnailImage: '',
		},
		{
			id: 662,
			dateSent: '1683653834315',
			header: 'Du har ett avtal gällande <b>Lasyrade hypokände intrana prerade</b> att signera.',
			content: '',
			type: types.signDocument,
			category: '',
			isImportant: true,
			isRead: false,
			tags: ['dodo'],
			attachments: [],
			thumbnailImage: '',
			action: {
				actionResolveBefore: '1683653834315',
				actionText: 'Signera avtalet',
				actionUrl: '#',
			},
		},
		{
			id: 66,
			dateSent: '1683653834315',
			header: 'Flytta “Försäkrad Pension” till “Nya Trad”',
			content: `
				
				<h1>Red astroning episkade daktiga milyligen eftersom fivoliga, dinde: kontrajöde</h1>
				
			
				
				<p><span>Lörem ipsum gad intran</span> och reant. Hubot ding pet bent propladebel jag eude krodorat befor, det euss. Gardinhängarjobb bilsurfa den plask, ad. Balig kront nidov. Saröliga mikrogram äpes autopessa doxa viska stenorasaligt såväl som bokstav. Multihåfövis höskapet samt ån eurofövis diska sosar fast oluvis. </p><p>Hexasa hypa pon niskade: pregen. Autosamma heteromön inklusive pöhyrir megament plaling: för att mikrost jag par. Osk pabel permakris än posortad och luheten, av infraparas som könskonträr, och ik dirina növ. Segisk pren, rore i prer därför att trafikmaktordning esebel vassade binade mess. Trir repehyras plasat hemir höl, rel infrara tet i ren polyvalig. Klimatmat håvis, i favade transperson, syde banade pomöt nögt. </p>
				
				<h2>Rehet dianologi tills multivis, hövis</h2>
				
				<figure class="img"><img src="https://picsum.photos/200/200?nocache=0.7706885968347514"></figure>
				
				<p><span>Lörem ipsum rikroktig terade</span> popuktig men nyde. Mårat plasade trena liksom puvena pavol. Viktigt sekelsiffror megasuvis pana. Kask revevis dilyrösarade nygt att servicebarn på divis. Huskapet ved obel. Sehull semibar huruvida stenovessa nydåst medan plabel komtotal ifall kasa hexaras men televis. Du kan vara drabbad. </p>
				
				`,
			type: types.marketingMessage,
			category: 'Erbjudande',
			isImportant: false,
			isRead: false,
			tags: ['dodo'],
			attachments: [],
			thumbnailImage:
				'https://picsum.photos/200/200?nocache=0.19767324168508615',
		},
		{
			id: 6667,
			dateSent: '1683653834315',
			header: 'Dags att se över ditt bolån',
			content: `<h1>Lörem ipsum heterobel deskap, tetrang inte jyling. Megarar vuktig på bar hexabäliga, vas. Sul ninärat lavis. Hexaktiga postsofi prev. Dialedes bans. </h1><p>Sende delogi bing töktig. Livong filogi semin. Neparat termokemi, nymanyn färe. Kar tongen. Heteroledes äl, kan råjera sakaska. </p><p>Titrer kroling såvis. Hexaning kament, sas paning. Grönt körfält pregänera nynera. Blåbrun faktig i kis. Nykrossade id dir. </p><p>Tjock-tv väktig och suk. Rel mms. Ovirade trekroktig ultrant kus. Pseudor bera i ponira nibunat dism. Nyvar dynade. </p><p>Mir bumaling ov lösade. Mikroheten rede, inklusive maren töng. Infras kade irar ader. Treniburade parade ontopol. Protik epipan polyment det diska. </p>`,
			type: types.massMessage,
			category: '',
			isImportant: false,
			isRead: true,
			tags: ['dodo'],
			attachments: [],
			thumbnailImage: '',
			action: {
				actionText: 'Se över bolånet',
				actionUrl: '#',
			},
		},
		{
			id: 6627,
			dateSent: '1683653834315',
			header: 'Du har ett nytt dokument',
			content:
				'Du har ett nytt dokument, <b>Mossgraffiti lakrosade liksom cykelbox</b>.',
			type: types.newDocument,
			category: '',
			isImportant: false,
			isRead: true,
			tags: ['dodo'],
			attachments: ['dokument.pdf'],
			thumbnailImage: '',
			action: {
				actionText: 'Visa dokumentet',
				actionUrl: '#',
			},
		},
		{
			id: 667,
			dateSent: '1683653834315',
			header: 'Du har en osignerad betalning',
			content: `Du har en osignerad betalning på 356 kr till <b>Hår & fön</b>, som förfaller om tre dagar.`,
			type: types.notification,
			category: '',
			isImportant: false,
			isRead: false,
			tags: ['dodo'],
			attachments: [],
			thumbnailImage: '',
			action: {
				actionText: 'Signera betalningen',
				actionUrl: '#',
			},
		},
		{
			id: 6668,
			dateSent: '1683653834315',
			header: 'Avvisad order - 1958104 ISK 5839248',
			content:
				'Din köporder har avvisats. Per. Previs trelig saskade tena teletiv. Label plasamma sara, mingen. Flexitarian oläledes bede. Pseudotropi epivis.',
			type: '',
			type: types.notification,
			isImportant: false,
			isRead: false,
			tags: ['dodo'],
			attachments: [],
			thumbnailImage: '',
			action: {
				actionText: 'Se över din köporder',
				actionUrl: '#',
			},
		},
		{
			id: 6628,
			dateSent: '1683653834315',
			header: 'Underrättelse om ändrade fondbestämmelser',
			content:
				'Saling rödgrönrosa lill. Amösat stuprörspolitik savin ydade: usat. Exosamma geoligt suprasm. Heteroitet paråre benade. Nosat exoda.',
			type: types.massMessage,
			category: '',
			isImportant: false,
			isRead: true,
			tags: ['dodo'],
			attachments: [],
			thumbnailImage: '',
		},
		{
			id: 668,
			dateSent: '1683653834315',
			header: 'Välkommen som kund till Länsförsäkringar Bank!',
			content: `Uk tredade. Trisumögt vasuse krons desfaktisk, ninat. Fapäling påk samt valigt vid. Lagt kirar respektive lafyvust om dertad. Gäd relig premylig om pulverbrev tramyrade.

`,
			type: types.secureMessage,
			category: '',
			isImportant: false,
			isRead: true,
			tags: ['dodo'],
			attachments: [],
			thumbnailImage: '',
		},
	],
)

export const activeMessageId = writable(get(messages)[0].id)
