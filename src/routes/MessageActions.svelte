<script>
	import CloseIcon from '../lib/icons/CloseIcon.svelte'
	import SettingsIcon from '../lib/icons/SettingsIcon.svelte'
	import SearchIcon from '../lib/icons/SearchIcon.svelte'
	import NewMessageIcon from '../lib/icons/NewMessageIcon.svelte'
	import FingerIcon from '../lib/icons/FingerIcon.svelte'
	import TrashIcon from '../lib/icons/TrashIcon.svelte'
	import { activeMessageId, panes, activePane, messages } from './globals'

	export let remind, search

	const closeMessagePane = () => ($activePane = panes.none)

	const deleteMessage = () => {
		$messages = $messages.filter(m => m.id !== $activeMessageId)
		$activeMessageId = -1
	}

	const toggleRemind = () => (remind = !remind)
	const toggleSearch = () => (search = !search)
</script>

{#if $activeMessageId >= 0}
	<li on:click|stopPropagation={deleteMessage} title="Ta bort meddelande">
		<TrashIcon />
	</li>
	<li on:click|stopPropagation={toggleRemind} title="Påminn mig om detta">
		<FingerIcon />
	</li>
{/if}
{#if $activeMessageId === -1}
	<li on:click|stopPropagation={toggleSearch} title="Sök">
		<SearchIcon />
	</li>
{/if}

<li on:click={closeMessagePane} title="Stäng meddelanden">
	<CloseIcon />
</li>

<style lang="scss">
	li {
		list-style: none;
		cursor: pointer;
		transition: transform 0.3s;

		&:hover {
			transform: scale(1.1);
		}
	}
</style>
