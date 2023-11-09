<script>
	import DummyUploader from './DummyUploader.svelte'
	import Taglist from './Taglist.svelte'
	import Fuse from 'fuse.js'
	import * as ö from 'ouml'
	import { onDestroy, onMount } from 'svelte'

	import { messages, types, panes, activePane } from '$lib/globals'
	import { keywords } from './keywords'
	import { slide, fade } from 'svelte/transition'

	export let messageStatus, messageStatuses

	const newMessageTemplate = {
		subject: '',
		body: '',
	}
	let newMessage = newMessageTemplate

	const clearMessage = () => {
		newMessage = newMessageTemplate
		ö.setLocal('newMessage', null)
		//$activeMessageId = -1
	}

	const sendMessage = async () => {
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
		messageStatus = messageStatuses.pending
		await ö.wait(200)
		clearMessage()
		messageStatus = messageStatuses.sent
		//$activePane = panes.none
	}

	const closePane = () => ($activePane = panes.none)

	const fuse = new Fuse(keywords, {
		keys: ['words'],
		includeScore: true,
		threshold: 0.2,
		minMatchCharLength: 4,
		ignoreLocation: true,
	})

	// save user input to local
	onMount(() => {
		newMessage = ö.getLocal('newMessage') || newMessageTemplate
	})
	onDestroy(() => {
		ö.setLocal('newMessage', newMessage)
	})

	$: shortlist = ö.pipe(
		newMessage.subject + newMessage.body,
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
</script>

{#if messageStatus === messageStatuses.unsent}
	<div transition:fade={{ duration: 200 }}>
		<div class="form-group">
			<label>Ämne</label>
			<input
				type="text"
				class="form-control"
				bind:value={newMessage.subject}
			/>
		</div>

		<div class="form-group">
			<label>Meddelande</label>
			<textarea
				class="form-control"
				rows="10"
				bind:value={newMessage.body}
			/>
		</div>

		<DummyUploader />

		{#if newMessage.subject.length || newMessage.body.length}
			<div class="form-group" transition:slide={{ delay: 500 }}>
				<label>Vad handlar ditt meddelande om?</label>

				<Taglist {shortlist} keywords={keywords.map(v => v.group)} />

				<p class="text-sm text-muted">
					Hjälp oss kategorisera ditt meddelande, så kan vi svara dig
					snabbare! Du kan lägga till flera ämnen.
				</p>
			</div>
		{/if}

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
	</div>
{:else if messageStatus === messageStatuses.sent}
	<div transition:fade class="top">
		<h3 class="mb-05" />
		<p>
			Vi har tagit emot ditt meddelande. Vi svarar nästan alltid inom 24
			timmar på vardagar.
		</p>
		<p class="text-sm">
			Om du vill kan du få en notis på sms eller e-post när vi har svarat.
			Välj vilket du föredrar under
			<a href="#"> notisinställningar</a>.
		</p>
		<p>
			<a
				href="#"
				on:click|stopPropagation={closePane}
				type="button"
				class="btn btn-primary btn-sm-block">Stäng</a
			>
		</p>
	</div>
{/if}

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
	.text-sm {
		color: var(--gray);
	}
</style>
