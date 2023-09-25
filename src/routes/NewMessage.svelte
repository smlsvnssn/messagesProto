<script>
	import { onDestroy, onMount } from 'svelte'
	import * as ö from 'ouml'
	import { messages, types, activeMessageId } from './globals'

	let options = ['Bank', 'Försäkring', 'Pension']

	const newMessageTemplate = {
		activeOption: options[0],
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
				//tags: ['dodo'],
				//cases: ['answer', 'reply'],
				//attachments: ['biff.pdf', 'boff.xls'],
				//thumbnailImage: '',
			},
			...$messages,
		]
		clearMessage()
	}

	// save user input to local
	onMount(() => (newMessage = ö.getLocal('newMessage') || newMessageTemplate))
	onDestroy(() => ö.setLocal('newMessage', newMessage))
</script>

<header>
	<h4>Skriv ett nytt meddelande till oss</h4>
	<p>
		Vi svarar nästan alltid inom ett dygn, och du kan lita på vad vi säger.
	</p>
</header>
<div class="form-group">
	<label for="validationCustom01">Vad handlar ditt meddelande om?</label>
	<div class="btn-group btn-group-stretch">
		{#each options as option}
			<label
				class="btn"
				class:active={option === newMessage.activeOption}
			>
				<input
					type="radio"
					bind:group={newMessage.activeOption}
					name="filters"
					value={option}
				/>
				{option}
			</label>
		{/each}
	</div>
</div>

<div class="form-group">
	<label for="validationCustom01">Ämne</label>
	<input
		type="text"
		required=""
		class="form-control"
		id="exampleInputEmail1"
		aria-describedby="emailHelp1"
		placeholder=""
		bind:value={newMessage.subject}
	/>
</div>

<div class="form-group">
	<label for="validationCustom01">Meddelande</label>
	<textarea
		class="form-control"
		required=""
		id="exampleTextarea"
		rows="10"
		bind:value={newMessage.body}
	/>
</div>

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
		<p class="text-sm text-muted">
			Du får en notifiering på <b>sms</b> när du får svar.
			<a href="#">Ändra</a>
		</p>
	</div>
</div>

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
		border-bottom: 2px solid var(--shadow);
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
