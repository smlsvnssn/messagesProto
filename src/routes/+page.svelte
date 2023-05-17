<script>
	import ImportantMessagesNotice from './ImportantMessagesNotice.svelte'
	import MessagePane from './MessagePane.svelte'
	import Header from './Header.svelte'
	import {
		isMessagePaneActive,
		isSmallWindow,
		isRedDotActive,
		messages,
	} from './stuff'
	import '../style.css'

	export const prerender = true
	let innerWidth

	$: $isSmallWindow = innerWidth < 800
	$: importantMessages = $messages.filter(m => m.isImportant)
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>Messages demo</title>
</svelte:head>

<main class="lb4">
	<Header />

	{#if $isRedDotActive && importantMessages.length}
		<ImportantMessagesNotice messages={importantMessages} />
	{/if}

	{#if $isMessagePaneActive}
		<MessagePane />
	{/if}

	<div class="fejkbody">
		<aside />
		<article>
			<p />
			<p />
			<p />
			<p />
			<p />
			<p />
		</article>
	</div>
</main>

<style lang="scss">
	:global(body) {
		--headerHeight: 3.75rem;
		background: var(--tint) !important;
		height: calc(100svh - var(--headerHeight));
		inset: 0;
		position: absolute;

		margin-top: var(--headerHeight);

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
	}

	.fejkbody {
		max-width: 1226px;
		margin: auto;
		display: flex;
		min-height: calc(100svh - var(--headerHeight));
		align-content: stretch;

		aside {
			flex: 0 1 260px;
			background: var(--blue);
			@media (max-width: 800px) {
				display: none;
			}
		}

		article {
			flex: 1;
			padding: 2rem;
			display: grid;
			gap: 2rem;
			background: var(--white);

			p {
				margin: 0%;
				background: var(--tint);
				border-radius: 0.25rem;
			}
		}
	}
</style>
