<script>
	import Taglist from './Taglist.svelte'
	import Fuse from 'fuse.js'

	import { onDestroy, onMount } from 'svelte'
	import * as ö from 'ouml'
	import { messages, types, activeMessageId } from './globals'

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

	const keywords = ['Bank', 'Försäkring', 'Pension', 'Personskada', 'Skada']

	const fuse = new Fuse(keywords, {
		includeScore: true,
		threshold: 0.4,
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

<div class="form-group">
	<div class="upload w-100">
		<div class="upload-placeholder" />
		<input
			class="upload-input"
			type="file"
			name="filename"
			id="upload"
			multiple
		/>
		<label class="upload-label btn btn-secondary px-1" for="upload">
			<svg
				focusable="false"
				aria-hidden="true"
				class="icon mr-025"
				width="24"
				height="24"
			>
				<use xlink:href="/assets/icons/24/icons.svg#image-doc-24" />
			</svg>
			Bifoga fil
		</label>
		<p class="text-sm text-muted">
			Tillåtna filformat är: .exe, .sh, .msi, .js, .doc, .xls
		</p>
	</div>
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
