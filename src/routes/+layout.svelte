<script>
	import ImportantMessagesNotice from './ImportantMessagesNotice.svelte'
	import MessagePane from './MessagePane.svelte'
	import Header from './Header.svelte'
	import {
		panes,
		activePane,
		isSmallWindow,
		isRedDotActive,
		messages,
	} from './globals'
	import '../style.css'
	import NewMessagePane from './NewMessagePane.svelte'
	import SettingsPane from './SettingsPane.svelte'
	import LeftMenu from './LeftMenu.svelte'

	export const prerender = true
	let innerWidth

	$: $isSmallWindow = innerWidth < 800
	$: importantMessages = $messages.filter(m => m.isImportant && !m.isRead)
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>Messages demo</title>
</svelte:head>

<main class="lb4">
	<Header />

	<!-- Debug stuff -->
	<!-- {$activePane} -->
	<!-- {$activeMessageId} -->

	{#if $isRedDotActive && importantMessages.length && $activePane === panes.importantMessagesNotice}
		<ImportantMessagesNotice {importantMessages} />
	{/if}

	{#if $activePane === panes.message}
		<MessagePane />
	{/if}
	{#if $activePane === panes.newMessage}
		<NewMessagePane />
	{/if}
	{#if $activePane === panes.settings}
		<SettingsPane />
	{/if}

	<div class="fejkbody">
		<LeftMenu />
		<slot />
	</div>
</main>

<style lang="scss">
	:global(body) {
		--headerHeight: 3.75rem;
		background: var(--tint) !important;
		height: calc(100svh - var(--headerHeight)) !important;
		inset: 0;
		position: absolute;

		margin-top: var(--headerHeight) !important;

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
	}
	:global(.btn) {
		position: initial !important;
	}
	.fejkbody {
		max-width: 1140px;
		margin: auto;
		display: flex;
		min-height: calc(100svh - var(--headerHeight));
		align-content: stretch;
	}
</style>
