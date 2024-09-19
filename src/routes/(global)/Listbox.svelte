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
	{#each ö.times(10) as i}
		<label for={i}>
			<input type="checkbox" id={i} name="monster" value={i} />
			<span>{lorem(settings)}</span>
		</label>
	{/each}
</fieldset>

<style lang="scss">
	fieldset {
		width: 100%;
		border: 2px solid var(--smoke) !important;
		border-radius: 0.5rem;
		padding-right: 0.5rem;
		margin-top: 2rem !important;
		max-height: 19rem;
		overflow-y: scroll;
		padding: 0 0.5rem !important;
		display: block;

		legend {
			padding: 0.25rem;
		}

		label {
			padding: 0.5rem;
			margin: 0.25rem;
			border-radius: 0.375rem;
			cursor: pointer;
			transition: all ease-out 0.1s;

			display: flex;
			align-items: center;
			gap: 0.5rem;

			font-family: var(--font-family-base);
			font-weight: 500;

			line-height: 1.5;

			background: var(--tint);

			&:hover {
				background: var(--cloud);
			}

			&:has(:checked) {
				background: var(--blue);
				color: var(--white);
			}

			span {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			input {
				appearance: none;
				width: 18px;
				height: 19px;
				transition: all ease-out 0.1s;

				flex: 0 0 auto;

				background: url("data:image/svg+xml,%3Csvg width='18' height='19' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect y='0.5' width='18' height='18' rx='9' fill='white'/%3E%3C/svg%3E%0A");

				&:checked {
					background: url("data:image/svg+xml,%3Csvg width='18' height='19' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.25 9.75L7.25 12.75L13.75 6.25' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
				}
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
			animation-range: 0em 10em;

			top: 0;
			background: radial-gradient(
				farthest-side at 50% 0,
				rgb(0 0 0 / 0.15),
				rgb(0 0 0 / 0)
			);
		}

		&:after {
			animation-direction: reverse;
			animation-range: calc(100% - 10em) calc(100%);

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
