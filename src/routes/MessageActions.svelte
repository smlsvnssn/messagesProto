<script>
	import SettingsIcon from '../lib/icons/SettingsIcon.svelte'
	import NewMessageIcon from '../lib/icons/NewMessageIcon.svelte'
	import FingerIcon from '../lib/icons/FingerIcon.svelte'
	import TrashIcon from '../lib/icons/TrashIcon.svelte'
	import { activeMessageId } from './stuff'
</script>

{#if $activeMessageId > -1}
	<li>
		<TrashIcon />
	</li>
	<li>
		<FingerIcon />
	</li>
{/if}
<li>
	<NewMessageIcon />
</li>
<li>
	<SettingsIcon />
</li>

<style lang="scss">
	li {
		list-style: none;
	}
</style>
