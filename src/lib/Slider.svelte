<script>
	let {
		title = 'Title',
		value = $bindable(0),
		min = 0,
		max = 100,
		step = 1,
	} = $props()

	// sanitize
	$effect(() => Math.max(min, Math.min(value, max)))
</script>

<label for="slider-{title}"> {title} </label>
<span>
	<input
		type="range"
		class="slider {title}"
		name="slider-{title}"
		bind:value
		{min}
		{max}
		{step}
	/><input type="number" class="slider" bind:value {min} {max} {step} />
</span>

<style lang="scss">
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		//margin: 0;
	}

	span {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	input[type='range'] {
		accent-color: var(--blue);
		flex: 1 1;
	}

	input[type='number'] {
		-moz-appearance: textfield;
		flex: 0 1 4ch;
		border: none;
		text-align: left;
	}
</style>
