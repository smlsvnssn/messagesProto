<script>
	import { slide } from 'svelte/transition'
	import { sineOut } from 'svelte/easing'

	export let remind
</script>

<div
	transition:slide={{
		y: -200,
		duration: 200,
		easing: sineOut,
	}}
	class="remind form-group"
>
	<b>Påminn mig:</b>
	<div
		class="d-md-inline-block"
		on:click|stopPropagation={() => (remind = false)}
	>
		<div class="custom-control custom-radio mr-05 mb-05">
			<input
				id="radio1"
				name="radio"
				type="radio"
				class="custom-control-input"
			/>
			<label class="custom-control-label" for="radio1">I morgon</label>
		</div>
	</div>
	<div
		class="d-md-inline-block"
		on:click|stopPropagation={() => (remind = false)}
	>
		<div class="custom-control custom-radio mr-05 mb-05">
			<input
				id="radio1"
				name="radio"
				type="radio"
				class="custom-control-input"
			/>
			<label class="custom-control-label" for="radio1">I övermorgon</label
			>
		</div>
	</div>
	<div
		class="d-md-inline-block"
		on:click|stopPropagation={() => (remind = false)}
	>
		<div class="custom-control custom-radio mr-05 mb-05">
			<input
				id="radio1"
				name="radio"
				type="radio"
				class="custom-control-input"
			/>
			<label class="custom-control-label" for="radio1">Om en vecka</label>
		</div>
	</div>
</div>

<style lang="scss">
	.remind {
		padding: 1rem;
		padding-bottom: 2px;
		background: #f9fbfdcc;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
		position: absolute;
		z-index: 1;
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
