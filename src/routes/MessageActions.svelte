<script>
	import CloseIcon from '../lib/icons/CloseIcon.svelte'
	import SettingsIcon from '../lib/icons/SettingsIcon.svelte'
	import NewMessageIcon from '../lib/icons/NewMessageIcon.svelte'
	import FingerIcon from '../lib/icons/FingerIcon.svelte'
	import TrashIcon from '../lib/icons/TrashIcon.svelte'
	import { activeMessageId, isMessagePaneActive, messages } from './globals'

	const closeMessagePane = () => ($isMessagePaneActive = false)

	const deleteMessage = () => {
		$messages = $messages.filter(m => m.id !== $activeMessageId)
		$activeMessageId = -1
	}

	const showNewMessage = () => {
		$activeMessageId = -0.5 // TODO: fix hack, should use its own var
	}
</script>

{#if $activeMessageId >= 0}
	<li on:click|stopPropagation={deleteMessage}>
		<TrashIcon />
	</li>
	<li>
		<FingerIcon />
	</li>
{/if}
{#if $activeMessageId !== -0.5}
	<li on:click|stopPropagation={showNewMessage}>
		<NewMessageIcon />
	</li>
{/if}
<li>
	<SettingsIcon />
</li>
<li on:click={closeMessagePane}>
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
