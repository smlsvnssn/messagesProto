<script>
	import CoffeeBreak from '$lib/icons/CoffeeBreak.svelte'

	import Message from './Message.svelte'
	import { messages, types } from './globals'

	let filteredMessages
	let filters = [
		{ name: 'Alla', filter: () => [...$messages] },
		{ name: 'Olästa', filter: () => $messages.filter(m => !m.isRead) },
		// {
		// 	name: 'Personliga',
		// 	filter: () => $messages.filter(m => m.type === types.secureMessage),
		// },
	]
	let activeFilter = 0

	$: filteredMessages = $messages && filters[activeFilter].filter()
</script>

<nav>
	<div class="btn-group btn-group-stretch">
		{#each filters as filter, i}
			<label class="btn" class:active={i === activeFilter}>
				<input
					type="radio"
					bind:group={activeFilter}
					name="filters"
					value={i}
				/>
				{filter.name}<!-- ({filter.filter().length}) -->
			</label>
		{/each}
	</div>
	<ul>
		{#each filteredMessages as message (message.id)}
			<Message {message} />
		{/each}
	</ul>
	{#if activeFilter === 1 && filteredMessages.length === 0}
		<div class="coffeeBreak">
			<div>
				<CoffeeBreak />
				<p>Du har inga olästa meddelanden. <br /> Dags för en fika?</p>
			</div>
		</div>
	{/if}
</nav>

<style lang="scss">
	nav {
		flex: 0 1 37%;

		//@media (max-width: 800px) {
		flex: 0 1 50%;
		//}
	}

	.coffeeBreak {
		height: 80%;
		display: grid;
		align-items: center;
		justify-items: center;

		> div {
			display: grid;
			gap: 1rem;
			justify-items: center;
			p {
				font-size: 0.875rem !important;
				text-align: center;
				color: var(--gray);
			}
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
