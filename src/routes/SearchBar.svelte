<script>
	import { slide } from 'svelte/transition'
	import { sineOut } from 'svelte/easing'

	export let search
</script>

<div
	transition:slide={{
		y: -200,
		duration: 200,
		easing: sineOut,
	}}
	class="remind form-group"
>
	<div class="form-group">
		<div class="input-group">
			<input
				type="text"
				required=""
				class="form-control"
				placeholder="Sök"
				aria-describedby="basic-addon1"
			/>
		</div>
	</div>
</div>

<style lang="scss">
	.remind {
		padding: 0 1rem;
		background: #fffc;
		position: relative;
		z-index: 10;
		width: 100%;
		backdrop-filter: blur(0.5rem);

		b {
			display: inline-block;
			padding-bottom: 0.5rem;
		}

		font-size: 0.875rem;
		.custom-control {
			translate: 0 -3px;
			&:first-child {
				margin-left: 0.25rem;
			}
		}
		label {
			vertical-align: -3px;
		}
	}
</style>
