<script>
	import Message from './Message.svelte'
	import { messages } from './stuff'
</script>

<nav>
	<ul>
		{#each $messages as message (message.id)}
			<Message {message} />
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		max-height: calc(100dvh - 9.375rem);
		overflow-y: auto;
	}
	ul {
		max-width: 28rem;
		margin: 0 !important;
		padding: 0 !important;
		display: flex;
		flex-direction: column;
	}
</style>
