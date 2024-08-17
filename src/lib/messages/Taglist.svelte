<script>
	import CloseIcon from '$lib/icons/CloseIconSmall.svelte'
	import PlusIcon from '$lib/icons/PlusIcon.svelte'
	import autoAnimate from '@formkit/auto-animate'
	import { tick } from 'svelte'
	import * as ö from 'ouml'

	let { shortlist = [], keywords = [] } = $props()

	let deletedFromAutotags = $state([])
	let manualTags = $state([])
	let isEditing = $state(false)

	let autotags = $derived([...ö.subtract(shortlist, deletedFromAutotags)])

	const addTag = () => {
		manualTags = [...ö.unique(manualTags.filter(v => v !== '')), '']
		isEditing = true
	}
	const saveAndAddNewTag = async () => {
		isEditing = false
		await tick()
		addTag()
	}
	const exitEditingTag = () => {
		isEditing = false
		manualTags = [...ö.unique(manualTags.filter(v => v !== ''))]
	}
	const addToDeletedList = item =>
		(deletedFromAutotags = [...deletedFromAutotags, item])
	const deleteManualTag = item =>
		(addedlist = [...addedlist.filter(v => v !== item)])
</script>

<datalist id="keywords">
	{#each keywords as item}
		<option value={item} />
	{/each}
</datalist>

<ul class="taglist" use:autoAnimate>
	{#each autotags as item}
		<li class="text-sm">
			{item}
			<CloseIcon on:click={() => addToDeletedList(item)} />
		</li>
	{/each}

	{#each manualTags as item, i (i)}
		{@const isEditable = isEditing && i === manualTags.length - 1}
		<li class:edit={isEditable} use:autoAnimate>
			{#if isEditable}
				<input
					autofocus={isEditable}
					maxlength="20"
					list="keywords"
					on:blur={exitEditingTag}
					on:keyup={e => {
						if (e?.key === 'Enter') saveAndAddNewTag()
					}}
					bind:value={manualTags[i]}
				/>
			{:else}
				{item}
				<CloseIcon on:click={() => deleteManualTag(item)} />
			{/if}
		</li>
	{/each}
	<PlusIcon on:click={addTag} />
</ul>

<style lang="scss">
	.taglist {
		padding-left: 0;
		padding-top: 0.5rem;
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
