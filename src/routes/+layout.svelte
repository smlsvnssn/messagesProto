<script>
	import ImportantMessagesNotice from '$lib/messages/ImportantMessagesNotice.svelte'
	import MessagePane from '$lib/messages/MessagePane.svelte'
	import Header from './Header.svelte'
	import {
		panes,
		activePane,
		isSmallWindow,
		isRedDotActive,
		isFirstRun,
		messages,
		types,
	} from '$lib/globals'
	import '../style.css'
	import NewMessagePane from '$lib/messages/NewMessagePane.svelte'
	import SettingsPane from '$lib/messages/SettingsPane.svelte'
	import LeftMenu from './LeftMenu.svelte'
	import { onMount } from 'svelte'
	import { onNavigate } from '$app/navigation'
	import { source } from 'sveltekit-sse'

	export const prerender = true
	let innerWidth

	let newMessage = source('api/listenForNewMessages').onError(event =>
		console.error({ event }),
	)

	$: {
		try {
			$messages = [JSON.parse($newMessage), ...$messages]
		} catch (error) {}
	}

	$: $isSmallWindow = innerWidth < 800
	$: importantMessages = $messages.filter(m => m.isImportant && !m.isRead)

	onMount(() => {
		if ($isFirstRun) {
			$activePane = panes.importantMessagesNotice

			$isFirstRun = false
		}
	})

	onNavigate(navigation => {
		if (!document.startViewTransition) return

		return new Promise(resolve => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>Messages demo</title>
</svelte:head>

<main class="lb4">
	<Header />

	<!-- Debug stuff -->
	<!-- {$isFirstRun} -->
	<!-- {$activePane} -->
	<!-- {$activeMessageId} -->

	{#if $isRedDotActive && importantMessages.length && $activePane === panes.importantMessagesNotice}
		<ImportantMessagesNotice {importantMessages} />
	{:else if $activePane === panes.message}
		<MessagePane />
	{:else if $activePane === panes.newMessage}
		<NewMessagePane />
	{:else if $activePane === panes.settings}
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
	:global(p) {
		line-height: 1.35;
	}
	.fejkbody {
		max-width: 1280px;
		margin: auto;
		display: flex;
		min-height: calc(100svh - var(--headerHeight));
		align-content: stretch;
	}
</style>
