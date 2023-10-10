<script>
	import ImportantMessagesNotice from './ImportantMessagesNotice.svelte'
	import MessagePane from './MessagePane.svelte'
	import Header from './Header.svelte'
	import {
		isMessagePaneActive,
		isNewMessagePaneActive,
		isSettingsPaneActive,
		isSmallWindow,
		isRedDotActive,
		messages,
		activeMessageId,
	} from './globals'
	import '../style.css'
	import NewMessagePane from './NewMessagePane.svelte'
	import SettingsPane from './SettingsPane.svelte'

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
	<!-- {$activeMessageId} -->

	{#if $isRedDotActive && importantMessages.length}
		<ImportantMessagesNotice {importantMessages} />
	{/if}

	{#if $isMessagePaneActive}
		<MessagePane />
	{/if}
	{#if $isNewMessagePaneActive}
		<NewMessagePane />
	{/if}
	{#if $isSettingsPaneActive}
		<SettingsPane />
	{/if}

	<div class="fejkbody">
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
	.fejkbody {
		max-width: 1140px;
		margin: auto;
		display: flex;
		min-height: calc(100svh - var(--headerHeight));
		align-content: stretch;
	}
</style>
