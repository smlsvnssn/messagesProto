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
		{
			id: 666,
			dateSent: '1683653834315',
			header: 'This is a test message with att the things.',
			content:
				'This is the message body. It can be either a string, an HTML string, or an array of threaded messages.',
			type: types.massMessage,
			category: 'Erbjudande',
			isImportant: true,
			isRead: false,
			tags: ['dodo'],
			cases: ['answer', 'reply'],
			attachments: ['biff.pdf', 'boff.xls'],
			thumbnailImage: '',
			action: {
				actionText: 'Gör grejen',
				actionUrl: '#',
			},
		},
		{
			id: 662,
			dateSent: '1683653834315',
			header: 'Du har fått post',
			content: 'Det här är <b>posten</b>',
			type: types.secureMessage,
			category: '',
			isImportant: false,
			isRead: true,
			tags: ['dodo'],
			attachments: [],
			thumbnailImage: '',
		},
		{
			id: 66,
			dateSent: '1683653834315',
			header: 'Lägg lök på laxen. Den blir godare då.',
			content: `<div id="wrapper" lang="sv">
				
				<h1 class="display">Difarade kadöledes för trängselskatt töt regåsam, spel tys tosologi</h1>
				
				<p class="ingress sans">Lörem ipsum trigisk. Vuvös medborgarforskning dovessade. Dåvust näss men den mikrosk lissa dera väntesorg. Dadade plafosk. </p>
				
				<article class="byline"><div>
							<div class="img"><img src="https://randomuser.me/api/portraits/thumb/men/36.jpg"></div>
							<div class="author">
								<address class="text">
									Suprask Pongen
									<br>
									<time class="text">21/5 2006</time>
									<a href="#" class="text">Infrase fabel. </a>
								</address>
							</div>
							</div>
						</article>
				
				<p><span class="text">Heteromibel anahument delningsboende även</span> om väsam käst regura kroheten, posoden, tell. Tötörade gubel emedan receptmotionär vigon, rerade, än Tintingate makros då sock utom diade. Resultatvarna heterona alltså makron då prehet byde. Doledes mada än monofibelt. Gigekonomi viräs, rödade: safåst, riberen kas vivide respektive porade bes. Söktig fask makrod eus bitysade oaktat spårpixel. </p>
				
				<blockquote class="text">Lörem ipsum religen pobin förväntningssamhälle. Nygurade jaspes klimatvänlig nettokrati visade. Multins. Okross sespen då infraktiga reade pengen respektive megan cisperson. Du kan vara drabbad. </blockquote>
				
				<p><span class="text">Lörem ipsum miktig kvasipess.</span> Fatiren kun fast besade eurahet metrosexualitet. Replada pomis bira även om prebir eller fapådade febalal tregisk. Dekadade krosk, svajpa misade, och seska. Trevis reaktiga fäsm begen dial prena heterotöheten, huruvida mitömisat. Nybade bont och ragon podade tritösk rok. </p><p>Ångerrösta ber nesamma, dåssa. Donesm disa även om välfärdsbrott. Kontran påsk sessade stjärnfamilj till prel rön. Lapel pekyssa pokaheten prekyn inklusive sode katt eller nes geoll al förutom attitydig. Polymir nepånade. Ten gäningen. </p><p>Krong ponade rot: masam diass, därför att pred att nynäv. Retronym mast eftersom ast och plånboksbröllop prerad jipobel. Gigade vall töde, ifall pojokrogon samt nagisk lanygåsk telepohet. Kons blandkostare sanade emedan bessade då lavektigt prol tenylaktiga för gånt fegången ifall lad. Retroningen multisat mikrotöment infrans eun alltså deskade om multissa pev boheten. Prekynade polöningen och dihet för tiden beteendedesign samt hypon. </p>
				
				<h2 class="text">Rähet hemissa, fad intran</h2>
				
				<figure class="img"><img src="https://picsum.photos/200/200?nocache=0.19767324168508615"></figure>
				
				<p><span class="text">Lörem ipsum syss vigon:</span> utan gurad för att speda. Pät dosamma temakonfirmation bede, lament. Kroviment hen. Hexade egoll gösade götest stenott eller antisa, gude mivajask. Sevil sakrov huruvida tes tåra och kvasira såsom teradiktigt astron incel. Sada guns oaktat pyväns nysam poddradio kakyl prede eller fahoren nesk. </p>
				
				<h3 class="text">Pänt rallylydnad, pokenad</h3>
				
				<p><span class="text">Lörem ipsum gåtåg misosm</span> kubtest, nisen nomyvis nyning även om karat pon diatera. Fono desamma. Vana nelasade till din ipektiga: om finanssmälta och cancelkultur rudes, pana. Ysk intrar då suprasänade fissade kaledes, infrade, jobbtorg geomirtad ökibening. Predat las spel men vans men nul ukylogi antesm. Semirad spement. </p><p>Tysat selabel. Var kuska yl prelogi väska, huruvida astrotang förutom epikest vabel kypyktigt tiningen. Pehet eus och teningen. Sprita pödor sulöl utan monokisade. Dott bedoktiga, dipyningen habatän tyrat och vang tybelt. Mygen bäst, kompetensutvisning pekroledes. </p><p>Patyde pohudade. Samykeskap fisam. Polybel homobäbel, plan ifall vitrebade artad. Kal hussa, då intraning utom tärade plus fick renuktig fartad dot. Intrassade syrade. Kyböns taikonaut tyl pebel fast redade om poplans fapögisk, sohet eusa pegisk. </p>
				
				<h3 class="text">Gangfluencer</h3>
				
				<p><span class="text">Lörem ipsum tirat kontrask</span> sakrohet dide, for subel dial. Sobelt mikrotrektig ösat: atomslöjd rertad och makromon eftersom hysk diss posk. Heteroplalåst läll emedan hyluskapet vassade. Huvigisk dosamma trekrobåsam, intradysade hemiska respektive kar hosamma vakogon smartball, nenera. Dodat dost pojust till reapusk regen emedan palål kafade. Mikros röhugon ifall tresörade, energikrig nyjunat vittneslitteratur sokrohet fans, huruvida kodod. Du kan vara drabbad. </p><p>Donat nen gåläskapet, till dement kroren megapresaren bevick. Multis plal mybel belosaktigt multijäktigt, funkis. Denisade ninade antinade, därför att pan eller plangen och fakås. Varen bisam respektive minera eller tössade susade om vasam fastän pabilåpologi innan maden utom rera suprarat. Saktig red, spelän bituktigt spens telenera liksom fans och fabel. Kahyska plan ången myd än nyvan koluktigt utom gigamisperade prosk kas dekanade. Du kan vara drabbad. </p>

			</div>`,
			type: types.marketingMessage,
			category: '',
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
			header: 'This is a test message',
			content:
				'This is the message body. It can be either a string, an HTML string, or an array of threaded messages.',
			type: types.notification,
			category: '',
			isImportant: true,
			isRead: false,
			tags: ['dodo'],
			attachments: [],
			thumbnailImage: '',
			action: {
				actionText: 'Gör grejen',
				actionUrl: '#',
			},
		},
		{
			id: 6627,
			dateSent: '1683653834315',
			header: 'Du har fått post',
			content: 'Det här är <b>posten</b>',
			type: types.newDocument,
			category: '',
			isImportant: false,
			isRead: true,
			tags: ['dodo'],
			attachments: [],
			thumbnailImage: '',
		},
		{
			id: 667,
			dateSent: '1683653834315',
			header: 'Lägg lök på laxen. Den blir godare då.',
			content: `<div id="wrapper" lang="sv">
			
				<p class="dårrad text">
					§ 92.5
					<span>Prens biskapet, ädys. </span>
				</p>
				
				<h1 class="display">Difarade kadöledes för trängselskatt töt regåsam, spel tys tosologi</h1>
				
				<p class="ingress sans">Lörem ipsum trigisk. Vuvös medborgarforskning dovessade. Dåvust näss men den mikrosk lissa dera väntesorg. Dadade plafosk. </p>
				
				<article class="byline"><div>
							<div class="img"><img src="https://randomuser.me/api/portraits/thumb/men/36.jpg"></div>
							<div class="author">
								<address class="text">
									Suprask Pongen
									<br>
									<time class="text">21/5 2006</time>
									<a href="#" class="text">Infrase fabel. </a>
								</address>
							</div>
							</div>
						</article>
				
				<p><span class="text">Heteromibel anahument delningsboende även</span> om väsam käst regura kroheten, posoden, tell. Tötörade gubel emedan receptmotionär vigon, rerade, än Tintingate makros då sock utom diade. Resultatvarna heterona alltså makron då prehet byde. Doledes mada än monofibelt. Gigekonomi viräs, rödade: safåst, riberen kas vivide respektive porade bes. Söktig fask makrod eus bitysade oaktat spårpixel. </p>
				
				<blockquote class="text">Lörem ipsum religen pobin förväntningssamhälle. Nygurade jaspes klimatvänlig nettokrati visade. Multins. Okross sespen då infraktiga reade pengen respektive megan cisperson. Du kan vara drabbad. </blockquote>
				
				<p><span class="text">Lörem ipsum miktig kvasipess.</span> Fatiren kun fast besade eurahet metrosexualitet. Replada pomis bira även om prebir eller fapådade febalal tregisk. Dekadade krosk, svajpa misade, och seska. Trevis reaktiga fäsm begen dial prena heterotöheten, huruvida mitömisat. Nybade bont och ragon podade tritösk rok. </p><p>Ångerrösta ber nesamma, dåssa. Donesm disa även om välfärdsbrott. Kontran påsk sessade stjärnfamilj till prel rön. Lapel pekyssa pokaheten prekyn inklusive sode katt eller nes geoll al förutom attitydig. Polymir nepånade. Ten gäningen. </p><p>Krong ponade rot: masam diass, därför att pred att nynäv. Retronym mast eftersom ast och plånboksbröllop prerad jipobel. Gigade vall töde, ifall pojokrogon samt nagisk lanygåsk telepohet. Kons blandkostare sanade emedan bessade då lavektigt prol tenylaktiga för gånt fegången ifall lad. Retroningen multisat mikrotöment infrans eun alltså deskade om multissa pev boheten. Prekynade polöningen och dihet för tiden beteendedesign samt hypon. </p>
				
				<h2 class="text">Rähet hemissa, fad intran</h2>
				
				<figure class="img"><img src="https://picsum.photos/200/200?nocache=0.19767324168508615"></figure>
				
				<p><span class="text">Lörem ipsum syss vigon:</span> utan gurad för att speda. Pät dosamma temakonfirmation bede, lament. Kroviment hen. Hexade egoll gösade götest stenott eller antisa, gude mivajask. Sevil sakrov huruvida tes tåra och kvasira såsom teradiktigt astron incel. Sada guns oaktat pyväns nysam poddradio kakyl prede eller fahoren nesk. </p>
				
				<h3 class="text">Pänt rallylydnad, pokenad</h3>
				
				<p><span class="text">Lörem ipsum gåtåg misosm</span> kubtest, nisen nomyvis nyning även om karat pon diatera. Fono desamma. Vana nelasade till din ipektiga: om finanssmälta och cancelkultur rudes, pana. Ysk intrar då suprasänade fissade kaledes, infrade, jobbtorg geomirtad ökibening. Predat las spel men vans men nul ukylogi antesm. Semirad spement. </p><p>Tysat selabel. Var kuska yl prelogi väska, huruvida astrotang förutom epikest vabel kypyktigt tiningen. Pehet eus och teningen. Sprita pödor sulöl utan monokisade. Dott bedoktiga, dipyningen habatän tyrat och vang tybelt. Mygen bäst, kompetensutvisning pekroledes. </p><p>Patyde pohudade. Samykeskap fisam. Polybel homobäbel, plan ifall vitrebade artad. Kal hussa, då intraning utom tärade plus fick renuktig fartad dot. Intrassade syrade. Kyböns taikonaut tyl pebel fast redade om poplans fapögisk, sohet eusa pegisk. </p>
				
				<h3 class="text">Gangfluencer</h3>
				
				<p><span class="text">Lörem ipsum tirat kontrask</span> sakrohet dide, for subel dial. Sobelt mikrotrektig ösat: atomslöjd rertad och makromon eftersom hysk diss posk. Heteroplalåst läll emedan hyluskapet vassade. Huvigisk dosamma trekrobåsam, intradysade hemiska respektive kar hosamma vakogon smartball, nenera. Dodat dost pojust till reapusk regen emedan palål kafade. Mikros röhugon ifall tresörade, energikrig nyjunat vittneslitteratur sokrohet fans, huruvida kodod. Du kan vara drabbad. </p><p>Donat nen gåläskapet, till dement kroren megapresaren bevick. Multis plal mybel belosaktigt multijäktigt, funkis. Denisade ninade antinade, därför att pan eller plangen och fakås. Varen bisam respektive minera eller tössade susade om vasam fastän pabilåpologi innan maden utom rera suprarat. Saktig red, spelän bituktigt spens telenera liksom fans och fabel. Kahyska plan ången myd än nyvan koluktigt utom gigamisperade prosk kas dekanade. Du kan vara drabbad. </p>

			</div>`,
			type: types.signDocument,
			category: '',
			isImportant: false,
			isRead: false,
			tags: ['dodo'],
			attachments: [],
			thumbnailImage: '',
		},
		{
			id: 6668,
			dateSent: '1683653834315',
			header: 'This is a test message',
			content:
				'This is the message body. It can be either a string, an HTML string, or an array of threaded messages.',
			type: '',
			category: '',
			isImportant: true,
			isRead: false,
			tags: ['dodo'],
			attachments: [],
			thumbnailImage: '',
			action: {
				actionText: 'Gör grejen',
				actionUrl: '#',
			},
		},
		{
			id: 6628,
			dateSent: '1683653834315',
			header: 'Du har fått post',
			content: 'Det här är <b>posten</b>',
			type: '',
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
			header: 'Lägg lök på laxen. Den blir godare då.',
			content: `<div id="wrapper" lang="sv">
			
				<p class="dårrad text">
					§ 92.5
					<span>Prens biskapet, ädys. </span>
				</p>
				
				<h1 class="display">Difarade kadöledes för trängselskatt töt regåsam, spel tys tosologi</h1>
				
				<p class="ingress sans">Lörem ipsum trigisk. Vuvös medborgarforskning dovessade. Dåvust näss men den mikrosk lissa dera väntesorg. Dadade plafosk. </p>
				
				<article class="byline"><div>
							<div class="img"><img src="https://randomuser.me/api/portraits/thumb/men/36.jpg"></div>
							<div class="author">
								<address class="text">
									Suprask Pongen
									<br>
									<time class="text">21/5 2006</time>
									<a href="#" class="text">Infrase fabel. </a>
								</address>
							</div>
							</div>
						</article>
				
				<p><span class="text">Heteromibel anahument delningsboende även</span> om väsam käst regura kroheten, posoden, tell. Tötörade gubel emedan receptmotionär vigon, rerade, än Tintingate makros då sock utom diade. Resultatvarna heterona alltså makron då prehet byde. Doledes mada än monofibelt. Gigekonomi viräs, rödade: safåst, riberen kas vivide respektive porade bes. Söktig fask makrod eus bitysade oaktat spårpixel. </p>
				
				<blockquote class="text">Lörem ipsum religen pobin förväntningssamhälle. Nygurade jaspes klimatvänlig nettokrati visade. Multins. Okross sespen då infraktiga reade pengen respektive megan cisperson. Du kan vara drabbad. </blockquote>
				
				<p><span class="text">Lörem ipsum miktig kvasipess.</span> Fatiren kun fast besade eurahet metrosexualitet. Replada pomis bira även om prebir eller fapådade febalal tregisk. Dekadade krosk, svajpa misade, och seska. Trevis reaktiga fäsm begen dial prena heterotöheten, huruvida mitömisat. Nybade bont och ragon podade tritösk rok. </p><p>Ångerrösta ber nesamma, dåssa. Donesm disa även om välfärdsbrott. Kontran påsk sessade stjärnfamilj till prel rön. Lapel pekyssa pokaheten prekyn inklusive sode katt eller nes geoll al förutom attitydig. Polymir nepånade. Ten gäningen. </p><p>Krong ponade rot: masam diass, därför att pred att nynäv. Retronym mast eftersom ast och plånboksbröllop prerad jipobel. Gigade vall töde, ifall pojokrogon samt nagisk lanygåsk telepohet. Kons blandkostare sanade emedan bessade då lavektigt prol tenylaktiga för gånt fegången ifall lad. Retroningen multisat mikrotöment infrans eun alltså deskade om multissa pev boheten. Prekynade polöningen och dihet för tiden beteendedesign samt hypon. </p>
				
				<h2 class="text">Rähet hemissa, fad intran</h2>
				
				<figure class="img"><img src="https://picsum.photos/200/200?nocache=0.19767324168508615"></figure>
				
				<p><span class="text">Lörem ipsum syss vigon:</span> utan gurad för att speda. Pät dosamma temakonfirmation bede, lament. Kroviment hen. Hexade egoll gösade götest stenott eller antisa, gude mivajask. Sevil sakrov huruvida tes tåra och kvasira såsom teradiktigt astron incel. Sada guns oaktat pyväns nysam poddradio kakyl prede eller fahoren nesk. </p>
				
				<h3 class="text">Pänt rallylydnad, pokenad</h3>
				
				<p><span class="text">Lörem ipsum gåtåg misosm</span> kubtest, nisen nomyvis nyning även om karat pon diatera. Fono desamma. Vana nelasade till din ipektiga: om finanssmälta och cancelkultur rudes, pana. Ysk intrar då suprasänade fissade kaledes, infrade, jobbtorg geomirtad ökibening. Predat las spel men vans men nul ukylogi antesm. Semirad spement. </p><p>Tysat selabel. Var kuska yl prelogi väska, huruvida astrotang förutom epikest vabel kypyktigt tiningen. Pehet eus och teningen. Sprita pödor sulöl utan monokisade. Dott bedoktiga, dipyningen habatän tyrat och vang tybelt. Mygen bäst, kompetensutvisning pekroledes. </p><p>Patyde pohudade. Samykeskap fisam. Polybel homobäbel, plan ifall vitrebade artad. Kal hussa, då intraning utom tärade plus fick renuktig fartad dot. Intrassade syrade. Kyböns taikonaut tyl pebel fast redade om poplans fapögisk, sohet eusa pegisk. </p>
				
				<h3 class="text">Gangfluencer</h3>
				
				<p><span class="text">Lörem ipsum tirat kontrask</span> sakrohet dide, for subel dial. Sobelt mikrotrektig ösat: atomslöjd rertad och makromon eftersom hysk diss posk. Heteroplalåst läll emedan hyluskapet vassade. Huvigisk dosamma trekrobåsam, intradysade hemiska respektive kar hosamma vakogon smartball, nenera. Dodat dost pojust till reapusk regen emedan palål kafade. Mikros röhugon ifall tresörade, energikrig nyjunat vittneslitteratur sokrohet fans, huruvida kodod. Du kan vara drabbad. </p><p>Donat nen gåläskapet, till dement kroren megapresaren bevick. Multis plal mybel belosaktigt multijäktigt, funkis. Denisade ninade antinade, därför att pan eller plangen och fakås. Varen bisam respektive minera eller tössade susade om vasam fastän pabilåpologi innan maden utom rera suprarat. Saktig red, spelän bituktigt spens telenera liksom fans och fabel. Kahyska plan ången myd än nyvan koluktigt utom gigamisperade prosk kas dekanade. Du kan vara drabbad. </p>

			</div>`,
			type: '',
			category: '',
			isImportant: false,
			isRead: false,
			tags: ['dodo'],
			attachments: [],
			thumbnailImage: '',
		},
	],
)

export const activeMessageId = writable(get(messages)[0].id)
