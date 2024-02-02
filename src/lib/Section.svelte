<script>
	export let header = 'header (set to empty string to remove)'
	let isOpen = false
</script>

<section>
	<article>
		{#if header}
			<h4>{header}</h4>
		{/if}
		<slot />
	</article>
</section>

<style lang="scss">
	section {
		//margin: 2rem 2rem 0rem 2rem;

		@media (width < 800px) {
			margin: 1rem;
		}

		&:last-child {
			margin-bottom: 2rem;
		}

		article {
			margin: 0%;
			background: var(--white);
			border-radius: 0.5rem;
			overflow: hidden;
			box-shadow:
				0 0.125rem 0.125rem #00000005,
				0 0.25rem 0.5rem #00000003;
			container-type: inline-size;

			h4,
			h5,
			h6 {
				margin: 0;
			}
			h4,
			h6 {
				padding: 1rem 1.25rem;
				border-bottom: 2px solid var(--tint);

				&:last-child {
					border-bottom: none;
				}
			}
		}
	}
</style>
