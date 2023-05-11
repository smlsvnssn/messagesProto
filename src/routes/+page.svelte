<script>
	import MessagePane from './MessagePane.svelte'

	import Header from './Header.svelte'
	export const prerender = true
	import { isMessagePaneActive } from './stuff'
	import '../style.css'
</script>

<svelte:head>
	<title>Messages demo</title>
</svelte:head>

<main class="lb4">
	<Header />

	{#if $isMessagePaneActive}
		<MessagePane />
	{/if}
</main>

<style lang="scss">
	:global(body) {
		background: var(--tint) !important;
		height: 100svh;
		inset: 0;
		position: absolute;

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
	}

	main {
	}
</style>
