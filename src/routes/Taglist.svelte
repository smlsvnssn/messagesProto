<script>
	import CloseIcon from '../lib/icons/CloseIconSmall.svelte'
	import PlusIcon from '$lib/icons/PlusIcon.svelte'
	import autoAnimate from '@formkit/auto-animate'
	import { tick } from 'svelte'
	import * as ö from 'ouml'

	export let shortlist = []
	export let keywords = []

	let deletedlist = []
	let addedlist = []
	let isEditing = false
	$: longlist = [...ö.subtract(shortlist, deletedlist)]

	const addTag = () => {
		addedlist = [...ö.unique(addedlist.filter(v => v !== '')), '']
		isEditing = true
	}
</script>

<datalist id="keywords">
	{#each keywords as item}
		<option value={item} />
	{/each}
</datalist>

<ul class="taglist" use:autoAnimate>
	{#each longlist as item}
		<li>
			{item}
			<CloseIcon
				on:click={() => (deletedlist = [...deletedlist, item])}
			/>
		</li>
	{/each}

	{#each addedlist as item, i (i)}
		{@const isEditable = isEditing && i === addedlist.length - 1}
		<li class:edit={isEditable} use:autoAnimate>
			{#if isEditable}
				<input
					autofocus={isEditable}
					maxlength="20"
					list="keywords"
					on:blur={() => {
						isEditing = false
						addedlist = [
							...ö.unique(addedlist.filter(v => v !== '')),
						]
					}}
					on:keyup={async e => {
						if (e.key === 'Enter') {
							isEditing = false
							await tick()
							addTag()
						}
					}}
					bind:value={item}
				/>
			{:else}
				{item}
				<CloseIcon
					on:click={() => {
						addedlist = [...addedlist.filter(v => v !== item)]
					}}
				/>
			{/if}
		</li>
	{/each}
	<PlusIcon on:click={addTag} />
</ul>

<style lang="scss">
	.taglist {
		padding-left: 0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;

		li {
			list-style: none;
			padding: 0.25rem 0.5rem 0.25rem 1rem;
			background: var(--cloud);
			border-radius: 5rem;
			display: flex;
			align-items: center;
			gap: 0.25rem;

			&.edit {
				background: var(--baby);
				min-width: 5rem;
				min-height: 2rem;
			}

			input {
				border: none;
				background: none;
				padding: 0;
				width: 7rem;
			}
		}
	}
</style>
