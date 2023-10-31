<script>
	import ChevronIcon from '$lib/icons/ChevronIcon.svelte'
	import { slide } from 'svelte/transition'
	import { goto } from '$app/navigation'

	export let isOpen = false
	export let url = null
	export let type
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<section on:click={() => (!url ? (isOpen = !isOpen) : goto(url))} class={type}>
	<slot />
	<div class="chevron" class:isOpen class:pointRight={!!url}>
		{#if url}
			<ChevronIcon />
		{:else if $$slots.details}
			<ChevronIcon direction="down" />
		{/if}
	</div>
	{#if isOpen && $$slots.details}
		<div
			transition:slide
			class="details"
			style:grid-column="span 13"
			on:click|stopPropagation
		>
			<slot name="details">Slot:details</slot>
		</div>
	{/if}
</section>

<style lang="scss">
	section {
		--grid: auto-flow / repeat(12, 1fr) 1.5rem;

		display: grid;
		column-gap: 1rem;
		row-gap: 0;
		grid: var(--grid);

		align-items: center;

		@container (width < 500px) {
			--grid: auto-flow / 1fr;
			row-gap: 1rem;

			> :global(*) {
				grid-column: 1 / span 2 !important;
			}
			> :global(:first-child) {
				grid-column: 1 / span 1 !important;
			}
		}

		border-bottom: 1px solid var(--tint);
		padding: 1.5rem 1.25rem;

		&.tableheader {
			padding: 0.5rem 1.25rem;
			background: color-mix(in oklab, var(--cloud), var(--white));
			@container (width < 500px) {
				display: none;
			}
		}
		&.tablerow :global(figcaption) {
			display: none;
			@container (width < 500px) {
				display: inherit;
			}
		}

		&:last-child {
			border-bottom: none;
		}

		.details {
			display: grid;
			cursor: auto;
			grid: var(--grid);
			gap: 1rem;
			margin: 0.5rem -0.75rem -1rem;
			background: var(--white);
			border-radius: 0.25rem;
			padding: 1rem 0.75rem 0;

			@container (width < 500px) {
				> :global(*) {
					grid-column: 1 / 1 !important;
				}
			}

			p:last-child {
				margin-bottom: 0;
			}
		}

		&:has(.chevron svg) {
			transition: all 0.3s;
			cursor: pointer;

			&:hover {
				background: color-mix(in oklab, var(--cloud) 35%, var(--white));
			}
			&:hover .chevron {
				transform: translateY(0.125rem);
			}
			&:hover .chevron.isOpen {
				transform: translateY(-0.125rem);
			}
			&:hover .chevron.pointRight {
				transform: translateX(0.125rem);
			}
		}

		.chevron {
			transition: all 0.3s;
			grid-column: 13 / span 1 !important;
			grid-row: 1 / span 1;

			@container (width < 500px) {
				grid-column: 2 / span 1 !important;
				align-self: start;
			}
			width: 1.5rem;
			aspect-ratio: 1/1;
			&.isOpen :global(svg) {
				rotate: -90deg !important;
			}
			& :global(svg) {
				transition: all 0.3s;

				// 	rotate: 90deg;
			}
		}
	}
</style>
