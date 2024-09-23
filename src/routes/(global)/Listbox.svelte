<script>
	import lorem from 'loerem'
	import * as ö from 'ouml'

	let settings = {
		isHeadline: true,
		sentencesPerParagraph: 1,
		useLörem: false,
	}
</script>

<fieldset class="has-scroll-shadows">
	<!-- <legend>Choose your...</legend> -->
	<div class="wrapper">
		{#each ö.times(10) as i}
			<div class="custom-control custom-checkbox">
				<input
					type="checkbox"
					id={i}
					name="nn"
					class="custom-control-input"
					value={i}
				/>
				<label class="custom-control-label" for={i}>
					{lorem(settings)}
				</label>
			</div>
		{/each}
	</div>
</fieldset>

<style lang="scss">
	fieldset {
		width: 100%;
		//margin-top: 2rem !important;
		max-height: 18rem;
		overflow-y: scroll;
		display: block;
		padding: 0;

		.wrapper {
			margin-top: -.5rem;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		legend {
			padding: 0.25rem;
		}

		.custom-control {
			margin-right: 1rem !important;
			padding-left: 2rem !important;
			display: flex;
			border: 2px solid var(--shadow);
			border-radius: 0.375rem;
			transition: all 0.2s;

			&:has(input[type='checkbox']:checked),
			&:has(input[type='radio']:checked) {
				border: 2px solid var(--blue);
				background: var(--cloud);
			}

			&:hover {
				border: 2px solid var(--silver);

				label {
					border: none !important;
					background: none !important;
				}
			}
		}

		label {
			padding: 0.5rem;
			width: 100%;
			margin-right: 0.25rem;
			width: 100%;

			cursor: pointer;

			align-items: center;
			gap: 0.5rem;

			font-family: var(--font-family-base);
			font-weight: 500;
			line-height: 1.5;

			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;

			&:hover {
				border: 2px solid var(--silver);
			}

			&:has(:checked) {
				border: 2px solid var(--blue);
				background: var(--cloud);
			}

			&:before,
			&:after {
				top: 0.65rem !important;
				left: 0.65rem !important;
			}
		}
	}

	.has-scroll-shadows {
		overflow-y: auto;
		position: relative;
		scroll-timeline: --scroll-timeline y;

		animation: detect-scroll;
		animation-timeline: --scroll-timeline;
		animation-fill-mode: none;

		&:before,
		&:after {
			content: '';
			display: block;
			position: sticky;
			left: 0em;
			right: 0em;
			height: 0.5rem;

			--visibility-if-can-scroll: var(--can-scroll) visible;
			--visibility-if-cant-scroll: hidden;
			visibility: var(
				--visibility-if-can-scroll,
				var(--visibility-if-cant-scroll)
			);

			animation-name: reveal;
			animation-timeline: --scroll-timeline;
			animation-fill-mode: both;
		}

		&:before {
			animation-range: 0em 5em;

			top: 0;
			background: radial-gradient(
				farthest-side at 50% 0,
				rgb(0 0 0 / 0.15),
				rgb(0 0 0 / 0)
			);
		}

		&:after {
			animation-direction: reverse;
			animation-range: calc(100% - 5em) calc(100%);

			bottom: 0;
			background: radial-gradient(
				farthest-side at 50% 100%,
				rgb(0 0 0 / 0.15),
				rgb(0 0 0 / 0)
			);
		}
	}
	@keyframes reveal {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes detect-scroll {
		from,
		to {
			--can-scroll: ;
		}
	}
</style>
