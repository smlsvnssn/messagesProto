<script>
	import ChevronIcon from '$lib/icons/ChevronIcon.svelte'
	import { slide } from 'svelte/transition'

	let isOpen = false
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<section on:click={() => (isOpen = !isOpen)}>
	<slot name="icon"><!--Slot:icon--></slot>
	<slot />
	<div class="chevron" class:isOpen>
		{#if $$slots.details}
			<ChevronIcon />
		{/if}
	</div>
	{#if isOpen && $$slots.details}
		<div transition:slide class="details" style:grid-column="span 14">
			<div style:width="2rem" />
			<slot name="details">Slot:details</slot>
			<div style:width="1.5rem" />
		</div>
	{/if}
</section>

<style lang="scss">
	section {
		--grid: auto-flow / 0fr repeat(12, 1fr) 0fr;

		display: grid;
		column-gap: 1rem;
		row-gap: 0;
		grid: var(--grid);
		align-items: center;

		@container (width < 500px) {
			--grid: auto-flow / 1fr;

			column-gap: 0;
			row-gap: 1rem;

			& > :global(*) {
				grid-column: 1 / span 1 !important;
			}

			.chevron {
				grid-column: -1 !important;
				grid-row: 1 / span 4;
				align-self: center;
				justify-self: center;
			}
		}

		border-bottom: 1px solid var(--tint);
		padding: 1.5rem 1.25rem;

		transition: all 0.3s;

		&:hover {
			background: color-mix(in oklab, var(--cloud) 35%, var(--white));
		}

		&:last-child {
			border-bottom: none;
		}

		.details {
			display: grid;
			grid: var(--grid);
			gap: 1rem;
			margin-top: 1rem;
			margin: 1rem -0.75rem 0;
			background: var(--white);
			border-radius: 0.25rem;
			padding: 1.25rem 0.75rem;
		}

		.chevron {
			transition: all 0.3s;
			width: 1.5rem;
			aspect-ratio: 1/1;
			&.isOpen :global(svg) {
				rotate: -90deg;
			}
			& :global(svg) {
				transition: all 0.3s;

				rotate: 90deg;
			}
		}

		&:hover .chevron {
			transform: translateY(0.25rem);
		}
	}
</style>
