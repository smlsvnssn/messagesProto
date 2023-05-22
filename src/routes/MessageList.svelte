<script>
	import Message from './Message.svelte'
	import { messages, types } from './globals'

	let filteredMessages
	let filters = ['Alla', 'Olästa', 'Personliga']
	let activeFilter = filters[0]

	$: {
		switch (activeFilter) {
			case 'Olästa':
				filteredMessages = $messages.filter(m => !m.isRead)
				break
			case 'Personliga':
				filteredMessages = $messages.filter(
					m => m.type === types.secureMessage,
				)
				break

			default:
				filteredMessages = [...$messages]
				break
		}
	}
</script>

<nav>
	<div class="btn-group btn-group-stretch">
		{#each filters as filter}
			<label class="btn" class:active={filter === activeFilter}>
				<input
					type="radio"
					bind:group={activeFilter}
					name="filters"
					value={filter}
				/>
				{filter}
			</label>
		{/each}
	</div>
	<ul>
		{#each filteredMessages as message (message.id)}
			<Message {message} />
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		flex: 0 1 37%;

		@media (max-width: 800px) {
			flex: 0 1 50%;
		}
	}
	label {
		font-size: 0.875rem !important;
	}
	ul {
		max-height: calc(100dvh - 11.875rem);
		overflow-y: auto;

		margin: 0 !important;
		padding: 0 !important;
		display: flex;
		flex-direction: column;
	}
</style>
