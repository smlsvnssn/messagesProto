<script>
	import DummyUploader from './DummyUploader.svelte'
	import Taglist from './Taglist.svelte'
	import Fuse from 'fuse.js'
	import * as ö from 'ouml'
	import { onDestroy, onMount } from 'svelte'
	import { messages, types, activeMessageId } from './globals'
	import { keywords } from './keywords'

	const newMessageTemplate = {
		subject: '',
		body: '',
	}

	let newMessage = newMessageTemplate

	const clearMessage = () => {
		newMessage = newMessageTemplate
		ö.setLocal('newMessage', null)
		$activeMessageId = -1
	}

	const sendMessage = () => {
		$messages = [
			{
				id: Math.random(),
				dateSent: Date.now(),
				header: newMessage.subject,
				content: [
					{
						id: Math.random(),
						dateSent: Date.now(),
						content: newMessage.body,
						type: '',
						isImportant: false,
						isRead: false,
					},
				],
				type: types.secureMessage,
				isImportant: false,
				isRead: true,
			},
			...$messages,
		]
		clearMessage()
	}

	const fuse = new Fuse(keywords, {
		keys: ['words'],
		includeScore: true,
		threshold: 0.2,
		minMatchCharLength: 4,
		ignoreLocation: true,
	})

	const getShortlist = str =>
		ö.pipe(
			str,
			// get unique words
			s => s.split(' '),
			ö.unique,
			// match with keywords
			a => a.map(v => fuse.search(v)),
			// and flatten to unique matches
			a => a.flatMap(v => v.map(r => r.item)),
			a => a.map(v => v.group),
			ö.unique,
		)

	// save user input to local
	onMount(() => {
		newMessage = ö.getLocal('newMessage') || newMessageTemplate
		shortlist = getShortlist(`${newMessage.subject} ${newMessage.body}`)
	})
	onDestroy(() => ö.setLocal('newMessage', newMessage))

	$: shortlist = getShortlist(`${newMessage.subject} ${newMessage.body}`)
</script>

<header>
	<h4>Skriv ett meddelande till oss</h4>
	<p>Vi svarar nästan alltid inom 24 timmar på vardagar.</p>
</header>

<div class="form-group">
	<label>Ämne</label>
	<input type="text" class="form-control" bind:value={newMessage.subject} />
</div>

<div class="form-group">
	<label>Meddelande</label>
	<textarea class="form-control" rows="10" bind:value={newMessage.body} />
</div>

<DummyUploader />

<div class="form-group">
	<label>Vad handlar ditt meddelande om?</label>
	<Taglist {shortlist} keywords={keywords.map(v => v.group)} />
	<p class="text-sm text-muted">
		Hjälp oss kategorisera ditt meddelande, så kan vi svara dig snabbare! Du
		kan lägga till flera ämnen.
	</p>
</div>

<p class="text-sm text-muted">
	Du får en notifiering på <b>sms</b> när du får svar.
	<a href="#">Ändra</a>
</p>

<hr />

<div class="exits">
	<a href="#" on:click|stopPropagation={clearMessage}>Avbryt</a>
	<a
		href="#"
		on:click|stopPropagation={sendMessage}
		type="button"
		class="btn btn-primary btn-sm-block">Skicka</a
	>
</div>

<style lang="scss">
	header {
		padding-bottom: 0.5rem;
		margin-bottom: 2rem;
		border-bottom: 1px solid var(--shadow);
	}
	.upload {
		margin-top: 1rem;
	}
	.exits {
		width: 100%;
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: flex-end;
	}
</style>
