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
	import { page } from '$app/stores'
	import '../../style.css'
	import NewMessagePane from '$lib/messages/NewMessagePane.svelte'
	import SettingsPane from '$lib/settings/SettingsPane.svelte'
	import LeftMenu from './LeftMenu.svelte'
	import { onMount, tick } from 'svelte'
	import { onNavigate } from '$app/navigation'
	import { source } from 'sveltekit-sse'
	import heroImg from '$lib/images/_Z221295_Stellan-Stephenson_.jpg?enhanced'

	export const prerender = true
	let innerWidth

	let newMessage = source('api/listenForNewMessages').onError(event =>
		console.error({ event }),
	)

	const getMessagesWithoutReactiveUpdateSvelteHack = () => $messages
	const resetImportantPane = async () => {
		$isRedDotActive = true
		if ($activePane === panes.none)
			$activePane = panes.importantMessagesNotice
	}
	// $: {
	//     //console.log($newMessage)
	//     let m
	//     try {
	//         m = JSON.parse($newMessage)
	//     } catch (error) {}
	//     if (m?.id) {
	//         $messages = [m, ...getMessagesWithoutReactiveUpdateSvelteHack()]
	//         resetImportantPane()
	//     }
	// }
	$: $isSmallWindow = innerWidth < 800
	$: importantMessages = $messages.filter(m => m.isImportant && !m.isRead)

	onMount(() => {
		if ($isFirstRun) {
			$activePane = panes.importantMessagesNotice

			$isFirstRun = false
		}
	})

	onNavigate(navigation => {
		console.log($page)

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
	{#if $isRedDotActive && importantMessages.length && $activePane === panes.importantMessagesNotice}
		<ImportantMessagesNotice {importantMessages} />
	{:else if $activePane === panes.message}
		<MessagePane />
	{:else if $activePane === panes.newMessage}
		<NewMessagePane />
	{:else if $activePane === panes.settings}
		<SettingsPane />
	{/if}
	<Header />

	<!-- Debug stuff -->
	<!-- {$isFirstRun} -->
	<!-- {$activePane} -->
	<!-- {$activeMessageId} -->

	{#if $page.url.pathname === '/'}
		<div class="hero">
			<enhanced:img src={heroImg} alt="öh" />
		</div>
	{/if}

	<div class="fejkbody">
		<slot />
	</div>
</main>

<style lang="scss">
	:global(body) {
		--headerHeight: 3.75rem;

		background: var(--tint) !important;
		//height: calc(100svh - var(--headerHeight)) !important;
		inset: 0;
		position: absolute;

		margin-top: calc(var(--headerHeight) + 3.25rem) !important;

		@media (width < 800px) {
			margin-top: var(--headerHeight) !important;
		}

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
	.hero {
		//height: 300px;
		width: 100%;
		background-size: cover;
		img {
			height: 350px;
			object-fit: cover;
		}
	}
	.fejkbody {
		max-width: 1280px;
		margin: auto;
		display: flex;
		flex-direction: column;
		min-height: calc(100svh - var(--headerHeight));
		align-content: stretch;
	}
</style>
